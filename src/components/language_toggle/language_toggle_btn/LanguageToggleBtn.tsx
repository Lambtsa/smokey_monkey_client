"use client";

import { type ReactElement, useCallback } from "react";

import { Icon, type IconType } from "@/components/icon";
import type { LocaleType } from "@/constants/locales";
import { useLanguage } from "@/stores/language.store";

interface LanguageToggleBtnProps {
  locale: LocaleType;
  onSelect: () => void;
}

const FLAGS: Record<LocaleType, IconType> = {
  EN: "en",
  FR: "fr",
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
    <button type="button" aria-label={locale} aria-pressed={currentLocale === locale} onClick={handleOnClick}>
      <Icon icon={FLAGS[locale]} className="block" />
    </button>
  );
};
