"use client";

import {
  type FormEvent, type ReactElement, useCallback, useMemo,
} from "react";
import {
  type FieldValues, type Path, type PathValue, useController,
} from "react-hook-form";

import { Input } from "@/components/input";
import { formatTime } from "@/utils/date";

import type { InputDateProps } from "./InputDate.types";

/* Date and time of a table booking, by the half hour, up to a year ahead */
export const InputDate = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  error,
  setValue,
  ...rest
}: InputDateProps<TFieldValues, TName>): ReactElement => {
  const { field: { ref: _ref, ...fieldRest }, } = useController({
    control,
    name,
  });

  const minDate = useMemo(() => {
    return formatTime(new Date());
  }, []);

  const maxDate = useMemo(() => {
    const newDate = new Date();
    newDate.setFullYear(newDate.getFullYear() + 1);
    return formatTime(newDate);
  }, []);

  /* ############################## */
  /* Actions */
  /* ############################## */
  const handleOnChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      /* Cleared by the visitor: keep it empty (an empty date can't be rounded) */
      const { value: input } = e.currentTarget;
      const value = input ? formatTime(new Date(input)) : "";
      setValue(name, value as PathValue<TFieldValues, TName>, {
        shouldValidate: true,
      });
    },
    [name, setValue],
  );

  return (
    <Input
      {...rest}
      type="datetime-local"
      {...fieldRest}
      error={error}
      min={minDate}
      max={maxDate}
      step={60 * 30}
      onChange={handleOnChange}
    />
  );
};
