import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { useAvatarStore } from '../../stores/avatarStore';
import { uploadImage } from '../../services/imageUpload';
import { ADMIN_KEY } from '../../constants/config';

export function AvatarUpload() {
  const { setAvatarUrl } = useAvatarStore();

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadImage(file);
      if (result.success) {
        setAvatarUrl(result.url, ADMIN_KEY);
      } else {
        console.error('Upload failed:', result.error);
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  }, [setAvatarUrl]);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="relative group cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label="Upload avatar"
      />
      <div className="flex items-center gap-2 bg-[#ff6b00]/10 hover:bg-[#ff6b00]/20 px-3 py-2 rounded-lg border border-[#ff6b00]/30 transition-colors">
        <Upload className="w-4 h-4 text-[#ff6b00]" />
        <span className="text-sm text-[#ff6b00]">Change Avatar</span>
      </div>
    </div>
  );
}