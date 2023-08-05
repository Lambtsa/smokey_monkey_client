import { FieldValues, Path, PathValue, useController } from "react-hook-form";
import { Input } from "../Input";
import { FormEvent, useCallback, useMemo } from "react";
import { InputDateProps } from "./InputDate.types";
import { formatDate } from "@helpers/formatDate";

export const InputDate = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  control,
  name,
  setValue,
}: InputDateProps<TFieldValues, TName>): JSX.Element => {
  const {
    field: { ref: _ref, ...fieldRest },
  } = useController({ control, name });

  const minDate = useMemo(() => {
    return formatDate(new Date());
  }, []);

  const maxDate = useMemo(() => {
    const newDate = new Date(minDate);
    newDate.setFullYear(newDate.getFullYear() + 1);
    return formatDate(newDate);
  }, [minDate]);
  /* ############################## */
  /* Actions */
  /* ############################## */
  const handleOnChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      setValue(name, e.currentTarget.value as PathValue<TFieldValues, TName>);
    },
    [name, setValue]
  );

  return (
    <Input
      type="date"
      {...fieldRest}
      min={minDate}
      max={maxDate}
      onChange={handleOnChange}
    />
  );
};
