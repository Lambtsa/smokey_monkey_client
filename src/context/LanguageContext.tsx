import { LOCALES } from "@constants/locales";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
  useMemo,
  Fragment,
} from "react";
import { IntlProvider } from "react-intl";
import EN from "@locales/en_GB.json";
import FR from "@locales/fr_FR.json";

type LocaleType = keyof typeof LOCALES;

interface LanguageContextShape {
  locale: LocaleType;
  setLocale: Dispatch<SetStateAction<LocaleType>>;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext<LanguageContextShape | undefined>(
  undefined,
);

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [locale, setLocale] = useState<LocaleType>("FR");

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

  const toggle = {
    locale,
    setLocale,
  };

  return (
    <LanguageContext.Provider value={toggle}>
      <IntlProvider
        locale={locale}
        messages={translations}
        textComponent={Fragment}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };

export function useLanguage(): LanguageContextShape {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
