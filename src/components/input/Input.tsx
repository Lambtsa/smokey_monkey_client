import type { ReactElement } from "react";

import type { InputProps } from "./Input.types";

export const Input = ({
  type = "text",
  error,
  ...rest
}: InputProps): ReactElement => {
  return (
    <div className="flex flex-col items-start w-full">
      <input
        {...rest}
        type={type}
        className="block w-full mx-auto p-4 rounded-[7px] border-none outline-none bg-ivory/20 text-ivory [color-scheme:dark] placeholder:text-base placeholder:tracking-normal placeholder:text-ivory/70 [&[type=datetime-local]]:flex [&[type=datetime-local]]:justify-start [&[type=datetime-local]]:relative [&[type=datetime-local]]:m-0 [&[type=datetime-local]]:pl-3 [&[type=datetime-local]]:appearance-none"
      />
      <div className="flex justify-between items-center gap-1 w-full h-4">
        {error && <p className="flex-auto m-0 pl-2 text-xs leading-4 text-ivory">{error.message}</p>}
      </div>
    </div>
  );
};
