"use client";

import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "navy" | "soft";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  navy: "bg-navy text-white hover:opacity-90",
  outline: "border border-gray-200 bg-white text-ink hover:border-brand",
  soft: "border border-gray-200 bg-brand-soft text-ink hover:border-brand",
};

export default function Button({
  variant = "primary",
  fullWidth,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
        variantClasses[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
