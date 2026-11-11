import type { ReactElement } from "react";

import { LanguageToggleBtn } from "./language_toggle_btn";

interface LanguageToggleProps {
  onSelect: () => void;
}

export const LanguageToggle = ({ onSelect, }: LanguageToggleProps): ReactElement => {
  return (
    <div className="flex justify-center items-center gap-2">
      <LanguageToggleBtn onSelect={onSelect} locale="FR" />
      <LanguageToggleBtn onSelect={onSelect} locale="EN" />
    </div>
  );
};
