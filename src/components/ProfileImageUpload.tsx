'use client';

import React, { useState, useRef, ChangeEvent } from 'react';

interface ProfileImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage?: string;
}

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({ 
  onImageUpload, 
  currentImage 
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImage || null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewUrl(imageUrl);
        onImageUpload(imageUrl); // Pass the image URL to parent component
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer"
        onClick={triggerFileSelect}
      >
        {previewUrl ? (
          <img 
            src={previewUrl} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">+</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <span className="text-white text-sm">Change</span>
        </div>
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
      
      {isUploading && (
        <p className="mt-2 text-sm text-gray-500">Uploading...</p>
      )}
      
      <button
        type="button"
        onClick={triggerFileSelect}
        className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
      >
        Upload Photo
      </button>
    </div>
  );
};

export default ProfileImageUpload;