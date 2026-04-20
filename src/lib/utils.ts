import { type ClassValue, clsx } from "clsx";

// Lightweight clsx alternative (no dependency needed)
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
