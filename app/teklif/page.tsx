import { QuoteProvider } from "@/context/QuoteContext";
import QuoteWizard from "@/components/wizard/QuoteWizard";

export default function TeklifPage() {
  return (
    <main className="min-h-screen px-4 py-10">
      <QuoteProvider>
        <QuoteWizard />
      </QuoteProvider>

      <footer className="mt-12 text-center text-xs text-gray-400">
        Copyright © 2024 QNB Sağlık Hayat Sigorta ve Emeklilik A.Ş.
      </footer>
    </main>
  );
}
