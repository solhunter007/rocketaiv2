import { useEffect, useRef } from 'react';

export function useAutoScroll<T extends HTMLElement>(dependencies: any[]) {
  const scrollRef = useRef<T>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, dependencies);

  return scrollRef;
}