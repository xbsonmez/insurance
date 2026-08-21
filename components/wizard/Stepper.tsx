"use client";

import { Check, Lock } from "lucide-react";
import { STEPS } from "@/context/QuoteContext";

interface StepperProps {
  currentStep: number;
}

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="flex items-stretch gap-1 overflow-x-auto rounded-full border border-gray-200 bg-white p-2">
      {STEPS.map((step, index) => {
        const isActive = index === currentStep;
        const isDone = index < currentStep;
        const isLocked = step.locked;

        return (
          <div
            key={step.id}
            className="flex min-w-max flex-1 items-center gap-2.5 px-4 py-2"
          >
            <span
              className={`grid h-7 w-7 flex-none place-items-center rounded-full text-xs font-bold ${
                isActive
                  ? "bg-brand text-white"
                  : isDone
                    ? "bg-brand-soft text-brand"
                    : "bg-gray-100 text-gray-400"
              }`}
            >
              {isLocked ? (
                <Lock size={13} />
              ) : isDone ? (
                <Check size={15} />
              ) : (
                index + 1
              )}
            </span>
            <span
              className={`whitespace-nowrap text-[13px] font-semibold ${
                isActive || isDone ? "text-ink" : "text-gray-400"
              }`}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
