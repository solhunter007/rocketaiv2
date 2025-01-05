import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { useAvatarStore } from '../stores/avatarStore';

const ADMIN_KEY = 'your-secret-key-here'; // Should match the key in avatarStore

export function AvatarUpload() {
  const { setAvatarUrl } = useAvatarStore();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string, ADMIN_KEY);
      };
      reader.readAsDataURL(file);
    }
  }, [setAvatarUrl]);

  // Only render if running in development mode
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
      <div className="flex items-center gap-2 bg-orange-500/10 hover:bg-orange-500/20 px-3 py-2 rounded-lg border border-orange-500/30 transition-colors">
        <Upload className="w-4 h-4 text-orange-500" />
        <span className="text-sm text-orange-500">Change Avatar</span>
      </div>
    </div>
  );
}