import { InputHTMLAttributes } from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

export type InputTheme = "light" | "dark";

export interface ControlledInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> extends InputProps {
  control: Control<TFieldValues, object>;
  name: TName;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
}
