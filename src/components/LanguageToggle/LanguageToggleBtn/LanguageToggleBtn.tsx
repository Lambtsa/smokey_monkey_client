import { LOCALES } from "@constants/locales";
import { useLanguage } from "@context/LanguageContext";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { StyledBtn } from "./LanguageToggleBtn.styles";
import { ReactComponent as EN } from "@assets/uk.svg";
// import { ReactComponent as DE } from "@assets/de.svg";
import { ReactComponent as FR } from "@assets/fr.svg";

type LocaleType = keyof typeof LOCALES;

interface LanguageToggleBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  locale: LocaleType;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const LanguageToggleBtn = ({
  locale,
  setIsOpen,
}: LanguageToggleBtnProps): JSX.Element => {
  const { locale: currentLocale, setLocale } = useLanguage();

  const Flag = useMemo(() => {
    switch (locale) {
      case "EN": {
        return EN;
      }
      // case "DE": {
      //   return DE;
      // }
      case "FR": {
        return FR;
      }
    }
  }, [locale]);

  const handleOnClick = useCallback(
    (id: LocaleType) => {
      setIsOpen(false);
      if (currentLocale === locale) {
        return;
      }
      setLocale(id);
    },
    [currentLocale, locale, setIsOpen, setLocale],
  );

  return (
    <StyledBtn onClick={() => handleOnClick(locale)}>
      <Flag />
    </StyledBtn>
  );
};
