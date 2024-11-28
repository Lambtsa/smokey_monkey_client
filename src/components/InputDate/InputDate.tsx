import { FieldValues, Path, PathValue, useController } from "react-hook-form";
import { Input } from "../Input";
import { FormEvent, useCallback, useMemo } from "react";
import { InputDateProps } from "./InputDate.types";
import { formatTime } from "@helpers/date";

export const InputDate = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  setValue,
}: InputDateProps<TFieldValues, TName>): JSX.Element => {
  const {
    field: { ref: _ref, ...fieldRest },
  } = useController({ control, name });

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
      const test = formatTime(new Date(e.currentTarget.value));
      console.log({ test, value: e.currentTarget.value });
      setValue(name, test.toString() as PathValue<TFieldValues, TName>);
    },
    [name, setValue],
  );

  return (
    <Input
      type="datetime-local"
      {...fieldRest}
      min={minDate}
      max={maxDate}
      step={60 * 30}
      onChange={handleOnChange}
    />
  );
};
