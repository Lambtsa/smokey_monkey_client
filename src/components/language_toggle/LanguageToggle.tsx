import type { ReactElement } from "react";

import { LanguageToggleBtn } from "./language_toggle_btn";

interface LanguageToggleProps {
  onSelect: () => void;
}

/* FR / EN */
export const LanguageToggle = ({ onSelect, }: LanguageToggleProps): ReactElement => {
  return (
    <div className="flex items-center gap-2 text-[13px] text-stone">
      <LanguageToggleBtn onSelect={onSelect} locale="FR" />
      <span aria-hidden="true">/</span>
      <LanguageToggleBtn onSelect={onSelect} locale="EN" />
    </div>
  );
};
