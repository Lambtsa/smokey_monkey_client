import { TranslationKey } from "@types";
import { Btn } from "./LinkBtn.styles";
import { useTranslation } from "@hooks/useTranslation";
import { useMemo } from "react";

interface LinkBtnProps {
  href: string;
  text: TranslationKey;
  openInTab?: boolean;
}

export const LinkBtn = ({
  href,
  text,
  openInTab,
}: LinkBtnProps): JSX.Element => {
  const { t } = useTranslation();

  const newTab = useMemo(
    () =>
      openInTab
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : undefined,
    [openInTab]
  );

  return (
    <Btn href={href} {...newTab}>
      {t({ id: text })}
    </Btn>
  );
};
