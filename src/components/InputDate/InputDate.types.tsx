import { ControlledInputProps } from "@components/Input/Input.types";
import { FieldValues, Path, UseFormSetValue } from "react-hook-form";

export interface InputDateProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> extends ControlledInputProps<TFieldValues, TName> {
  setValue: UseFormSetValue<TFieldValues>;
}
