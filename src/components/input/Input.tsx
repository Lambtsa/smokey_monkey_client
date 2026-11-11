import { type ReactElement, useId } from "react";

import type { InputProps } from "./Input.types";

/* A labelled field with a bottom line, and its error message under it */
export const Input = ({
  type = "text",
  label,
  error,
  className = "",
  ...rest
}: InputProps): ReactElement => {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className={`flex flex-col gap-2.5 w-full ${className}`}>
      <label htmlFor={id} className="caps text-[13px] tracking-[0.2em] text-stone">
        {label}
      </label>
      <input
        {...rest}
        id={id}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="w-full px-1 py-3.5 text-[17px] bg-transparent text-cream border-0 border-b border-cream/40 rounded-none outline-none [color-scheme:dark] placeholder:text-stone/60 focus:border-brass aria-invalid:border-[#E8907A]"
      />
      <p id={errorId} className="min-h-5 text-sm leading-5 text-[#E8907A]">
        {error?.message}
      </p>
    </div>
  );
};
