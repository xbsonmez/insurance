"use client";

import Button from "@/components/ui/Button";

interface WizardNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  showBack?: boolean;
}

export default function WizardNavigation({
  onBack,
  onNext,
  nextLabel = "DEVAM ET",
  nextDisabled,
  showBack = true,
}: WizardNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      {showBack ? (
        <Button variant="outline" onClick={onBack}>
          ← Geri
        </Button>
      ) : (
        <span />
      )}
      {onNext && (
        <Button variant="primary" onClick={onNext} disabled={nextDisabled}>
          {nextLabel}
        </Button>
      )}
    </div>
  );
}
