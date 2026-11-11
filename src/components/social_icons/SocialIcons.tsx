import Link from "next/link";
import type { ReactElement } from "react";

import { Icon } from "@/components/icon";
import { details } from "@/constants/details";

const linkClassName = "flex justify-center items-center size-11 border border-brass/40 text-brass hover:border-brass hover:text-brass-light";

export const SocialIcons = (): ReactElement => {
  return (
    <div className="flex items-center gap-3">
      <Link target="_blank" rel="noopener noreferrer" href={details.facebook} aria-label="Facebook" className={linkClassName}>
        <Icon icon="facebook" size={20} />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" href={details.instagram} aria-label="Instagram" className={linkClassName}>
        <Icon icon="instagram" size={20} />
      </Link>
    </div>
  );
};
