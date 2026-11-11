"use client";

import { type ReactElement, useCallback } from "react";

import type { LocaleType } from "@/constants/locales";
import { useLanguage } from "@/stores/language.store";

interface LanguageToggleBtnProps {
  locale: LocaleType;
  onSelect: () => void;
}

const NAMES: Record<LocaleType, string> = {
  EN: "English",
  FR: "Français",
};

export const LanguageToggleBtn = ({
  locale,
  onSelect,
}: LanguageToggleBtnProps): ReactElement => {
  const { locale: currentLocale, setLocale } = useLanguage();

  const handleOnClick = useCallback(() => {
    onSelect();
    if (currentLocale === locale) {
      return;
    }
    setLocale(locale);
  }, [currentLocale, locale, onSelect, setLocale]);

  return (
    <button
      type="button"
      lang={locale.toLowerCase()}
      aria-label={NAMES[locale]}
      aria-pressed={currentLocale === locale}
      onClick={handleOnClick}
      className={`min-h-11 px-1 caps ${currentLocale === locale ? "text-brass" : "text-stone hover:text-cream"}`}
    >
      {locale}
    </button>
  );
};
