import { FieldValues, Path, useController } from "react-hook-form";
import { ControlledInputProps } from "@components/Input/Input.types";
import { Input } from "../Input";

export const InputText = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  control,
  name,
  type,
  ...rest
}: ControlledInputProps<TFieldValues, TName>): JSX.Element => {
  const {
    field: { ref: _ref, ...fieldRest },
  } = useController({ control, name });

  return <Input {...rest} {...fieldRest} type={type} />;
};
