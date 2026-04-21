"use client";

import Image from "next/image";
import { usePhotos } from "./PhotoProvider";

const marqueeItems = [
  "POULET FAIT MAISON",
  "LIVRAISON A DOMICILE",
  "POULET FAIT MAISON",
  "LIVRAISON A DOMICILE",
  "POULET FAIT MAISON",
  "LIVRAISON A DOMICILE",
  "POULET FAIT MAISON",
  "LIVRAISON A DOMICILE",
];

function ChickenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M12 2C8.5 2 5 4.5 5 8c0 2.5 1.5 4.5 3.5 5.5L7 22h10l-1.5-8.5C17.5 12.5 19 10.5 19 8c0-3.5-3.5-6-7-6zm-1 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </svg>
  );
}

export function PhotoStrip() {
  const { stripPhotos } = usePhotos();
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <div className="bg-primary">
      {/* Photos — hidden on mobile */}
      <div className="hidden md:block px-6 pt-6">
        <div className="overflow-hidden rounded-t-xl border-6 border-white border-b-0" style={{ borderWidth: "6px", borderBottomWidth: 0 }}>
          <div className="grid grid-cols-3">
            {stripPhotos.map((photo, i) => (
              <div
                key={photo.src}
                className="relative overflow-hidden"
                style={{
                  paddingBottom: "75%",
                  borderRight: i < 2 ? "3px solid #ffffff" : "none",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 500px"
                  className="object-cover absolute inset-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee — fond blanc, texte noir (lisible sur fond blanc) */}
      <div className="px-0 pb-0 md:px-6 md:pb-6">
        <div
          className="overflow-hidden py-4 md:rounded-b-xl bg-white"
          style={{
            borderLeft: "6px solid #ffffff",
            borderRight: "6px solid #ffffff",
            borderBottom: "6px solid #ffffff",
          }}
        >
          <div className="flex animate-marquee-strip whitespace-nowrap">
            {repeated.map((item, i) => (
              <span
                key={i}
                className="mx-6 font-display text-xl sm:text-2xl lg:text-3xl tracking-widest flex items-center gap-4 text-secondary"
              >
                <ChickenIcon />
                <span className="font-bold">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-strip {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-strip {
          animation: marquee-strip 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
