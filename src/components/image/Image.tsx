import NextImage, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  /* How wide the picture is shown, so the browser downloads the right size */
  sizes: string;
  priority?: boolean;
  /* Extra classes, e.g. a filter on hero pictures */
  className?: string;
}

/* A picture that fills its (positioned) parent */
export const Image = ({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: ImageProps): ReactElement => {
  return (
    <NextImage
      alt={alt}
      src={src}
      sizes={sizes}
      fill
      priority={priority}
      className={`object-cover object-center ${className}`}
    />
  );
};
