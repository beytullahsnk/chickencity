"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// Strip photos (1..25) — on exclut strip-14 qui est un doublon de strip-4 (même
// contenu, même hash SHA-256). Sans ce filtre, le shuffle pouvait afficher
// deux fois la même image entre le Gallery et le PhotoStrip.
const EXCLUDED_INDICES = new Set([14]);

const allPhotos = Array.from({ length: 25 }, (_, i) => i + 1)
  .filter((n) => !EXCLUDED_INDICES.has(n))
  .map((n) => ({
    src: `/images/strip/strip-${n}.webp`,
    alt: `Chicken City Mer - Photo ${n}`,
  }));

/** Fisher-Yates shuffle (uniforme, contrairement au sort(() => random - 0.5)) */
function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface PhotoContextType {
  stripPhotos: typeof allPhotos;
  galleryPhotos: typeof allPhotos;
}

const DEFAULT_VALUE: PhotoContextType = {
  stripPhotos: allPhotos.slice(0, 3),
  galleryPhotos: allPhotos.slice(3, 11),
};

const PhotoContext = createContext<PhotoContextType>(DEFAULT_VALUE);

export function usePhotos() {
  return useContext(PhotoContext);
}

export function PhotoProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<PhotoContextType>(DEFAULT_VALUE);

  useEffect(() => {
    const shuffled = shuffle(allPhotos);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot client randomization
    setValue({
      stripPhotos: shuffled.slice(0, 3),
      galleryPhotos: shuffled.slice(3, 11), // slices disjointes → aucun chevauchement
    });
  }, []);

  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
}
