"use client"

import { useState } from "react"

export function Logo({ className, size = "large" }: { className?: string; size?: "large" | "small" }) {
  const isLarge = size === "large";
  const [imageError, setImageError] = useState(false);
  
  // Fallback caso a imagem não exista
  const FallbackLogo = () => (
    <div className={`flex flex-col items-center ${className || ''}`}>
      <div className="text-center">
        <h1 className={`${isLarge ? 'text-4xl md:text-5xl' : 'text-xl'} font-serif font-bold mb-1`}>
          <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            Oliveira's
          </span>
        </h1>
        <p className={`${isLarge ? 'text-xs md:text-sm' : 'text-[9px]'} font-sans tracking-wider text-amber-400/90 uppercase`}>
          SEMI JÓIAS & FOLHEADOS
        </p>
      </div>
    </div>
  );
  
  // Se a imagem não carregar, mostra fallback
  if (imageError) {
    return <FallbackLogo />;
  }
  
  return (
    <div className={`flex flex-col items-center ${className || ''}`}>
      <img
        src="/WhatsApp_Image_2025-12-28_at_10.17.46-removebg-preview.png"
        alt="Oliveira's Semi Jóias & Folheados"
        className={`object-contain ${isLarge ? 'max-w-[900px] max-h-[450px]' : 'max-w-[360px] max-h-[180px]'}`}
        onError={() => setImageError(true)}
        style={{ display: imageError ? 'none' : 'block' }}
      />
      {imageError && <FallbackLogo />}
    </div>
  )
}

