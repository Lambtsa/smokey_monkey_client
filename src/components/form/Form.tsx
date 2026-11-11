"use client";

import type {
  DetailedHTMLProps, FormHTMLAttributes, ReactElement, ReactNode,
} from "react";

import { Button } from "@/components/button";
import { useTranslation } from "@/hooks/useTranslation";
import type { TranslationKey } from "@/types/translations";

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
}: FormProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-start md:justify-center items-center w-full h-full max-w-[460px] px-4 py-12">
      <div className="flex flex-col justify-center items-start gap-2 w-full mb-4">
        <h2 className="font-display font-bold uppercase text-left text-sm leading-4 text-ivory/50">
          {t({
            id: title,
          })}
        </h2>
        <p className="font-bold text-left text-[32px] leading-8 mb-4 text-ivory">
          {t({
            id: subtitle,
          })}
        </p>
      </div>
      {children}
      <Button type="submit" btnType="primary">
        {t({
          id: btnText,
        })}
      </Button>
    </form>
  );
};
