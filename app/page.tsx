import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const products = [
  {
    name: "Tamamlayıcı Sağlık Sigortası",
    desc: "Kendiniz için hızlıca teklif alın.",
    href: "/teklif",
    active: true,
  },
  { name: "Kasko Sigortası", desc: "Yakında.", href: "#", active: false },
  { name: "DASK", desc: "Yakında.", href: "#", active: false },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-10 px-4 py-16">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand">
          <ShieldCheck size={16} /> Sigorta Teklif Platformu
        </div>
        <h1 className="font-serif text-3xl text-ink sm:text-4xl">
          Hangi ürün için teklif almak istersiniz?
        </h1>
        <p className="mt-3 text-gray-500">
          Çok ürünlü platform — teklif akışı tüm ürünlerde tekrar kullanılır.
        </p>
      </div>

      <div className="grid w-full gap-4 sm:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className={`flex flex-col gap-2 rounded-2xl border p-6 transition-colors ${
              p.active
                ? "border-gray-200 bg-white hover:border-brand"
                : "pointer-events-none border-dashed border-gray-200 bg-transparent opacity-50"
            }`}
          >
            <h2 className="font-serif text-lg text-ink">{p.name}</h2>
            <p className="text-sm text-gray-500">{p.desc}</p>
            {p.active && (
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Teklif al <ArrowRight size={15} />
              </span>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
