"use client";

import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

export default function Input({ label, icon, error, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
        {label}
      </label>
      <div
        className={`flex items-center gap-2 rounded-full border bg-white px-4 py-2.5 shadow-sm transition-colors focus-within:border-brand ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      >
        {icon && <span className="text-gray-400">{icon}</span>}
        <input
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-gray-400"
          {...rest}
        />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
