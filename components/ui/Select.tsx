"use client";

import { SelectHTMLAttributes, ReactNode } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  icon?: ReactNode;
  options: string[];
  placeholder?: string;
  error?: string;
}

export default function Select({
  label,
  icon,
  options,
  placeholder,
  error,
  ...rest
}: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-bold uppercase tracking-wide text-gray-500">
        {label}
      </label>
      <div
        className={`flex items-center gap-2 rounded-full border bg-white px-4 py-2.5 shadow-sm focus-within:border-brand ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      >
        {icon && <span className="text-gray-400">{icon}</span>}
        <select
          className="w-full cursor-pointer bg-transparent text-sm text-ink outline-none"
          {...rest}
        >
          <option value="" disabled>
            {placeholder ?? "Seçiniz"}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
