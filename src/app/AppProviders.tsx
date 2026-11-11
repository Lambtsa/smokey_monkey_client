"use client";

import {
  Fragment, type PropsWithChildren, type ReactElement, useEffect, useMemo,
} from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "@/constants/locales";
import EN from "@/locales/en-GB.json";
import FR from "@/locales/fr-FR.json";
import { useLanguage } from "@/stores/language.store";

export const AppProviders = ({ children }: PropsWithChildren): ReactElement => {
  const { locale } = useLanguage();

  /* Load the saved language once on the client (the server always renders French) */
  useEffect(() => {
    void useLanguage.persist.rehydrate();
  }, []);

  const translations = useMemo(() => {
    switch (locale) {
      case "EN": {
        return EN;
      }
      case "FR": {
        return FR;
      }
    }
  }, [locale]);

  return (
    <IntlProvider
      locale={LOCALES[locale]}
      defaultLocale={LOCALES.FR}
      messages={translations}
      textComponent={Fragment}
    >
      {children}
    </IntlProvider>
  );
};
