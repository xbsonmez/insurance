import { Offer, QuoteFormData } from "./types";

export function calculateOffer(data: QuoteFormData): Offer {
  const basePrice = 6172.84;

  const riskFactor: any = data.hasHealthDeclaration ? 1.15 : 1;
  const listPrice = Math.round(basePrice * riskFactor * 100) / 100;

  const discounted = listPrice * 0.9 * 0.9;
  const finalPrice = Math.round(discounted / 100) * 100;

  return {
    productName: "Net Tamamlayıcı Sağlık Sigortası",
    listPrice,
    finalPrice,
    period: "yıllık",
    discounts: ["%10 Hoş geldin", "%10 Peşin"],
    coverages: [
      { label: "Ayakta Tedavi", value: "-" },
      { label: "Ayakta Tedavi Katılım Payı", value: "-" },
      { label: "Yatarak Tedavi", value: "Limitsiz" },
      { label: "Anlaşmalı Kurum", value: "TSS Network*" },
    ],
  };
}

export function formatTRY(amount: number): string {
  return (
    amount.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " TL"
  );
}
