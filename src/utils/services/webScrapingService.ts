import axios from 'axios';
import * as cheerio from 'cheerio';

interface ScrapedCharacterInfo {
  name: string;
  description?: string;
  abilities?: string[];
  enemies?: string[];
  relationships?: string[];
}

const ALLOWED_DOMAINS = [
  'marvel.fandom.com',
  'www.marvel.com'
];

export async function scrapeCharacterInfo(characterName: string): Promise<ScrapedCharacterInfo | null> {
  try {
    // Try Marvel Fandom Wiki first
    const fandomUrl = `https://marvel.fandom.com/wiki/${encodeURIComponent(characterName.replace(' ', '_'))}`;
    const fandomInfo = await scrapeMarvelFandom(fandomUrl);
    if (fandomInfo) {
      return fandomInfo;
    }

    // Fallback to Marvel.com
    const marvelUrl = `https://www.marvel.com/characters/${encodeURIComponent(characterName.toLowerCase().replace(' ', '-'))}`;
    const marvelInfo = await scrapeMarvelOfficial(marvelUrl);
    if (marvelInfo) {
      return marvelInfo;
    }

    return null;
  } catch (error) {
    console.error('Web scraping error:', error);
    return null;
  }
}

async function scrapeMarvelFandom(url: string): Promise<ScrapedCharacterInfo | null> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    return {
      name: $('.page-header__title').text().trim(),
      description: $('.mw-parser-output > p').first().text().trim(),
      abilities: $('.mw-parser-output h2:contains("Powers")').nextUntil('h2').find('li').map((_, el) => $(el).text().trim()).get(),
      enemies: $('.mw-parser-output h2:contains("Enemies")').nextUntil('h2').find('li').map((_, el) => $(el).text().trim()).get(),
      relationships: $('.mw-parser-output h2:contains("Relationships")').nextUntil('h2').find('li').map((_, el) => $(el).text().trim()).get()
    };
  } catch (error) {
    console.error('Marvel Fandom scraping error:', error);
    return null;
  }
}

async function scrapeMarvelOfficial(url: string): Promise<ScrapedCharacterInfo | null> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    return {
      name: $('.masthead__headline').text().trim(),
      description: $('.masthead__copy').text().trim(),
      abilities: $('.powers-section li').map((_, el) => $(el).text().trim()).get()
    };
  } catch (error) {
    console.error('Marvel.com scraping error:', error);
    return null;
  }
}