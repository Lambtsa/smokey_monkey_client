import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { LocaleType } from "@/constants/locales";

interface LanguageState {
  locale: LocaleType;
  setLocale: (locale: LocaleType) => void;
}

/*
 * The visitor's language, kept in localStorage. The server always renders
 * French; AppProviders rehydrates the saved choice after the first render so
 * the server and client HTML match.
 */
export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      locale: "FR",
      setLocale: (locale) => set({
        locale,
      }),
    }),
    {
      name: "selected-language",
      skipHydration: true,
    },
  ),
);
