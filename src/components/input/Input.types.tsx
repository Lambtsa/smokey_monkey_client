import type { InputHTMLAttributes } from "react";
import type {
  Control, FieldError, FieldValues, Path,
} from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
}

export interface ControlledInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> extends InputProps {
  control: Control<TFieldValues>;
  name: TName;
}
