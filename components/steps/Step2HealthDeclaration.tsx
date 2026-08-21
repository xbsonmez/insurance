"use client";

import Button from "@/components/ui/Button";
import { useQuote } from "@/context/QuoteContext";
import { DISEASES } from "@/data/diseases";

export default function Step2HealthDeclaration() {
  const { updateData, goNext, goBack } = useQuote();

  function answer(hasCondition: boolean) {
    updateData({ hasHealthDeclaration: hasCondition });
    goNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="font-serif text-xl text-ink">
          Teklif için son bir adım kaldı.
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Aşağıdaki hastalıklardan biri veya birkaçı için teşhis veya tedavi
          aldınız mı?
        </p>
      </div>

      <div className="mx-auto h-px w-full max-w-2xl bg-gray-200" />

      <ul className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
        {DISEASES.map((disease) => (
          <li key={disease} className="flex items-start gap-2.5 text-sm text-ink">
            <span className="mt-1 text-brand">◆</span>
            <span>{disease}</span>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex flex-wrap justify-center gap-4">
        <Button variant="soft" onClick={() => answer(true)}>
          EVET, TEŞHİS / TEDAVİ ALDIM
        </Button>
        <Button variant="soft" onClick={() => answer(false)}>
          HAYIR, TEŞHİS / TEDAVİ ALMADIM
        </Button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={goBack}
          className="text-sm text-gray-500 hover:text-brand"
        >
          ← Geri dön
        </button>
      </div>
    </div>
  );
}
