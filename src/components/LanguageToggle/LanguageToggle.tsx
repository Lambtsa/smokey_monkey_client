import { Dispatch, SetStateAction } from "react";
import { LanguageContainer } from "./LanguageToggle.styles";
import { LanguageToggleBtn } from "./LanguageToggleBtn";

interface LanguageToggleProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const LanguageToggle = ({
  setIsOpen,
}: LanguageToggleProps): JSX.Element => {
  return (
    <LanguageContainer>
      <LanguageToggleBtn setIsOpen={setIsOpen} locale="FR" />
      <LanguageToggleBtn setIsOpen={setIsOpen} locale="DE" />
      <LanguageToggleBtn setIsOpen={setIsOpen} locale="EN" />
    </LanguageContainer>
  );
};
