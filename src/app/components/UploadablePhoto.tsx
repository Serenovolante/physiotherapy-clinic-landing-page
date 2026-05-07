import React, { useRef, useState } from "react";
import { Upload } from "lucide-react";

interface UploadablePhotoProps {
  src: string;
  alt: string;
}

export function UploadablePhoto({ src, alt }: UploadablePhotoProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div
      className="relative w-24 h-24 rounded-full group cursor-pointer shrink-0 overflow-hidden"
      style={{ border: "3px solid #0D9488", boxShadow: "0 4px 16px rgba(13,148,136,0.18)" }}
      onClick={() => inputRef.current?.click()}
    >
      <img
        src={preview ?? src}
        alt={alt}
        className="w-full h-full object-cover object-top cursor-pointer"
        onClick={() => inputRef.current?.click()}
        title="Click to upload photo"
      />

      {/* Upload overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <Upload size={16} color="white" />
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}