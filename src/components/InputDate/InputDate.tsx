import { FieldValues, Path, PathValue, useController } from "react-hook-form";
import { Input } from "../Input";
import { FormEvent, useCallback } from "react";
import { InputDateProps } from "./InputDate.types";

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
  /* ############################## */
  /* Actions */
  /* ############################## */
  const handleOnChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      // console.log({ value: typeof e.currentTarget.value });
      setValue(name, e.currentTarget.value as PathValue<TFieldValues, TName>);
    },
    [name, setValue]
  );

  // useEffect(() => {
  //   console.log(fieldRest.value)
  //   // setValue(name, fieldRest.value)
  // })

  return <Input type="date" {...fieldRest} onChange={handleOnChange} />;
};
