"use client";

import Stepper from "./Stepper";
import Step1PersonalInfo from "@/components/steps/Step1PersonalInfo";
import Step2HealthDeclaration from "@/components/steps/Step2HealthDeclaration";
import Step3OfferDetails from "@/components/steps/Step3OfferDetails";
import { useQuote } from "@/context/QuoteContext";

const stepComponents = [
  <Step1PersonalInfo key="1" />,
  <Step2HealthDeclaration key="2" />,
  <Step3OfferDetails key="3" />,
];

export default function QuoteWizard() {
  const { currentStep } = useQuote();

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
      <h1 className="text-center font-serif text-2xl text-brand">
        Tamamlayıcı Sağlık Sigortası{" "}
        <span className="text-ink">Satın Al</span>
      </h1>

      <Stepper currentStep={currentStep} />

      <div className="rounded-2xl bg-white/60 p-4 sm:p-8">
        {stepComponents[currentStep]}
      </div>
    </div>
  );
}
