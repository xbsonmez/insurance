"use client";

import { useState } from "react";
import { CreditCard, Phone, Mail, Briefcase } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { useQuote } from "@/context/QuoteContext";
import { PROFESSIONS } from "@/data/professions";
import {
  isValidIdentityNumber,
  isValidPhone,
  isValidEmail,
  formatPhone,
} from "@/lib/validation";

export default function Step1PersonalInfo() {
  const { data, updateData, goNext } = useQuote();
  const [errors, setErrors] = useState<any>({});

  function validate() {
    const e: any = {};
    if (!isValidIdentityNumber(data.identityNumber))
      e.identityNumber = "Geçerli bir kimlik numarası giriniz.";
    if (!isValidPhone(data.phone))
      e.phone = "Geçerli bir cep telefonu giriniz.";
    if (!isValidEmail(data.email))
      e.email = "Geçerli bir e-posta adresi giriniz.";
    if (!data.profession) e.profession = "Lütfen mesleğinizi seçiniz.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit() {
    if (validate()) goNext();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="font-serif text-xl text-ink">
          Teklifinizi hazırlayabilmemiz için{" "}
          <span className="text-brand">aşağıdaki bilgileri</span> paylaşabilir
          misiniz?
        </h2>
      </div>

      <div className="mx-auto flex w-full max-w-md flex-col gap-4">
        <Input
          label="Kimlik Numarası"
          icon={<CreditCard size={16} />}
          inputMode="numeric"
          maxLength={11}
          placeholder="TC Kimlik No"
          value={data.identityNumber}
          error={errors.identityNumber}
          onChange={(e) =>
            updateData({
              identityNumber: e.target.value.replace(/\D/g, "").slice(0, 11),
            })
          }
        />
        <Input
          label="Cep Telefonu"
          icon={<Phone size={16} />}
          inputMode="tel"
          placeholder="(5XX) XXX XX XX"
          value={formatPhone(data.phone)}
          error={errors.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
        />
        <Input
          label="E-posta Adresi"
          icon={<Mail size={16} />}
          type="email"
          placeholder="ornek@eposta.com"
          value={data.email}
          error={errors.email}
          onChange={(e) => updateData({ email: e.target.value })}
        />
        <Select
          label="Mesleğiniz"
          icon={<Briefcase size={16} />}
          options={PROFESSIONS}
          placeholder="Meslek seçiniz"
          value={data.profession}
          error={errors.profession}
          onChange={(e) => updateData({ profession: e.target.value })}
        />

        <p className="text-center text-xs text-gray-500">
          Kişisel Verilerin İşlenmesi Hakkında ayrıntılı bilgi için{" "}
          <a href="#" className="font-semibold text-brand">
            tıklayınız.
          </a>
        </p>

        <Button variant="primary" fullWidth onClick={handleSubmit}>
          DEVAM ET
        </Button>
      </div>
    </div>
  );
}
