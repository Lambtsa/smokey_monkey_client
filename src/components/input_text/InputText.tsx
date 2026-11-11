"use client";

import type { ReactElement } from "react";
import {
  type FieldValues, type Path, useController,
} from "react-hook-form";

import { Input } from "@/components/input";
import type { ControlledInputProps } from "@/components/input/Input.types";

export const InputText = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({
  control,
  name,
  type,
  ...rest
}: ControlledInputProps<TFieldValues, TName>): ReactElement => {
  const { field: { ref: _ref, ...fieldRest }, } = useController({
    control,
    name,
  });

  return <Input {...rest} {...fieldRest} type={type} />;
};
