import { TranslationKey } from "@types";
import { Btn } from "./LinkBtn.styles";
import { useTranslation } from "@hooks/useTranslation";

interface LinkBtnProps {
  href: string;
  text: TranslationKey;
}

export const LinkBtn = ({ href, text }: LinkBtnProps): JSX.Element => {
  const { t } = useTranslation();
  return <Btn href={href}>{t({ id: text })}</Btn>;
};
