import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from "react";
import { FormContainer, Subtitle, Title, TitleContainer } from "./Form.styles";
import { TranslationKey } from "@types";
import { useTranslation } from "@hooks/useTranslation";
import { Button } from "@components/Button";

type FormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {
  children: ReactNode;
  title: TranslationKey;
  subtitle: TranslationKey;
  btnText: TranslationKey;
};

export const Form = ({
  children,
  title,
  subtitle,
  btnText,
  onSubmit,
}: FormProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <FormContainer onSubmit={onSubmit}>
      <TitleContainer>
        <Title>{t({ id: title })}</Title>
        <Subtitle>{t({ id: subtitle })}</Subtitle>
      </TitleContainer>
      {children}
      <Button type="submit" btnType="primary">
        {t({ id: btnText })}
      </Button>
    </FormContainer>
  );
};
