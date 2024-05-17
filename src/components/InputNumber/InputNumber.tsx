import { FieldValues, Path, useController } from "react-hook-form";
import { ControlledInputProps, Input } from "../Input";

export const InputNumber = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  ...rest
}: ControlledInputProps<TFieldValues, TName>): JSX.Element => {
  const {
    field: { ref: _ref, ...fieldRest },
  } = useController({ control, name });

  return <Input {...rest} {...fieldRest} type="number" />;
};
