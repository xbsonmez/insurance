"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { QuoteFormData, StepMeta } from "@/lib/types";

export const STEPS: StepMeta[] = [
  { id: "kisisel", title: "Kişisel Bilgiler" },
  { id: "saglik", title: "Sağlık Bilgileri" },
  { id: "teklif", title: "Teklif Detayları" },
  { id: "odeme", title: "Ödeme Bilgileri", locked: true },
];

const initialData: QuoteFormData = {
  identityNumber: "",
  phone: "",
  email: "",
  profession: "",
  hasHealthDeclaration: null,
};

interface QuoteContextValue {
  data: QuoteFormData;
  updateData: (patch: Partial<QuoteFormData>) => void;
  currentStep: number;
  goNext: () => void;
  goBack: () => void;
  goToStep: (index: number) => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<QuoteFormData>(initialData);
  const [currentStep, setCurrentStep] = useState(0);

  const lastAllowed = STEPS.filter((s) => !s.locked).length - 1;

  function updateData(patch: Partial<QuoteFormData>) {
    setData((prev) => ({ ...prev, ...patch }));
  }

  function goNext() {
    setCurrentStep((s) => Math.min(s + 1, lastAllowed));
  }

  function goBack() {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }

  function goToStep(index: number) {
    if (index >= 0 && index <= lastAllowed) setCurrentStep(index);
  }

  const value = useMemo(
    () => ({ data, updateData, currentStep, goNext, goBack, goToStep }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, currentStep]
  );

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote, QuoteProvider içinde kullanılmalı");
  return ctx;
}
