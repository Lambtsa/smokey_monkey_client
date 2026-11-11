import type {
  FieldValues, Path, UseFormSetValue,
} from "react-hook-form";

import type { ControlledInputProps } from "@/components/input/Input.types";

export interface InputDateProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> extends ControlledInputProps<TFieldValues, TName> {
  setValue: UseFormSetValue<TFieldValues>;
}
