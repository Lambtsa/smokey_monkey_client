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
  btnText: TranslationKey;
  isLoading?: boolean;
};

/* A brass-framed form in two columns; give a field md:col-span-2 to use both */
export const Form = ({
  children,
  btnText,
  isLoading = false,
  onSubmit,
  ...rest
}: FormProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <form
      {...rest}
      noValidate
      onSubmit={onSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 w-full p-6 md:p-11 border border-brass/50 bg-forest"
    >
      {children}
      <Button type="submit" btnType="primary" disabled={isLoading} aria-busy={isLoading} className="w-full mt-4 md:col-span-2">
        {t({
          id: btnText,
        })}
      </Button>
    </form>
  );
};
