"use client";

import { siteConfig } from "@/data/site";

interface OrderButtonProps {
  variant?: "header" | "mobile" | "hero" | "section" | "dark";
  label?: string;
  className?: string;
  ariaLabel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer";

const variants = {
  header:
    "bg-primary text-secondary px-6 py-2.5 rounded-full text-sm hover:bg-primary-dark hover:scale-105 shadow-md hover:shadow-lg",
  mobile:
    "bg-primary text-secondary w-full py-3 rounded-xl text-base hover:bg-primary-dark shadow-md",
  hero:
    "bg-primary text-secondary px-10 py-4 rounded-full text-lg hover:bg-primary-dark hover:scale-105 shadow-xl hover:shadow-2xl",
  section:
    "bg-primary text-secondary px-8 py-3 rounded-full text-sm hover:bg-primary-dark hover:scale-105 shadow-md hover:shadow-lg",
  dark:
    "bg-secondary text-white px-10 py-4 rounded-full text-lg hover:bg-secondary-light hover:scale-105 shadow-xl hover:shadow-2xl",
};

export function OrderButton({
  variant = "section",
  label = "Commander en ligne",
  className = "",
  ariaLabel,
}: OrderButtonProps) {
  return (
    <button
      type="button"
      data-glf-cuid={siteConfig.gloreFi.cuid}
      data-glf-ruid={siteConfig.gloreFi.ruid}
      aria-label={ariaLabel ?? label}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
}
