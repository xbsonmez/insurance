export interface QuoteFormData {
  identityNumber: string;
  phone: string;
  email: string;
  profession: string;
  hasHealthDeclaration: boolean | null;
}

export interface CoverageLine {
  label: string;
  value: string;
}

export interface Offer {
  productName: string;
  listPrice: number;
  finalPrice: number;
  period: string;
  discounts: string[];
  coverages: CoverageLine[];
}

export type StepId = "kisisel" | "saglik" | "teklif" | "odeme";

export interface StepMeta {
  id: StepId;
  title: string;
  locked?: boolean;
}
