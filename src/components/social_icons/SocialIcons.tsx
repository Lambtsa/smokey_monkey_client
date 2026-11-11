import Link from "next/link";
import type { ReactElement } from "react";

import { Icon } from "@/components/icon";
import { details } from "@/constants/details";

export const SocialIcons = (): ReactElement => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link target="_blank" rel="noopener noreferrer" href={details.facebook} aria-label="Facebook">
        <Icon icon="facebook" />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" href={details.instagram} aria-label="Instagram">
        <Icon icon="instagram" />
      </Link>
    </div>
  );
};
