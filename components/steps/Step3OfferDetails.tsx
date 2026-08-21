"use client";

import { useMemo } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useQuote } from "@/context/QuoteContext";
import { calculateOffer, formatTRY } from "@/lib/mockOffer";

export default function Step3OfferDetails() {
  const { data, goBack } = useQuote();

  const offer = useMemo(() => calculateOffer(data), [data]);

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="font-serif text-xl text-ink">
          Size özel ihtiyaçlarınıza en uygun plan önerilerimizi hazırladık.
        </h2>
        <p className="mt-2 text-sm font-semibold text-green-600">
          %10 Hoş geldin indiriminden yararlanmak için hemen satın alın.
          <br />
          Üstelik peşin ödemelerde ek %10 indirim.
        </p>
      </div>

      <Card className="mx-auto w-full max-w-sm p-6 text-center">
        <h3 className="font-serif text-lg text-ink">{offer.productName}</h3>

        <div className="mt-3 flex items-center justify-center gap-2">
          {offer.discounts.map((d, i) => (
            <span key={d} className="flex items-center gap-2">
              {i > 0 && <span className="font-bold text-green-600">+</span>}
              <span className="rounded-md bg-green-600 px-2 py-1 text-[11px] font-bold text-white">
                {d}
              </span>
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-400 line-through">
          {formatTRY(offer.listPrice)}
        </p>
        <p className="font-serif text-3xl font-bold text-brand">
          {formatTRY(offer.finalPrice)}
        </p>
        <p className="mb-4 text-xs text-gray-400">/{offer.period}</p>

        <Button variant="navy" fullWidth className="mb-2">
          SATIN AL
        </Button>
        <Button variant="outline" fullWidth>
          TEKLİF GÖNDER
        </Button>

        <div className="mt-6 flex flex-col gap-3 text-left">
          {offer.coverages.map((c) => (
            <div key={c.label} className="border-b border-gray-100 pb-2">
              <p className="text-[11px] text-gray-400">{c.label}</p>
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="text-brand">◆</span> {c.value}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <p className="mx-auto max-w-md text-center text-[11px] text-gray-500">
        *Türkiye çapında <b>600&apos;ün üzerinde</b> anlaşmalı özel sağlık
        kuruluşuna ulaşmak için geniş kapsamlı anlaşmalı kurum ağımızı
        inceleyebilirsiniz.
      </p>

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
