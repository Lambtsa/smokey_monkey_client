import NextImage, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  /* How wide the picture is shown, so the browser downloads the right size */
  sizes: string;
}

export const Image = ({
  src,
  alt,
  sizes,
}: ImageProps): ReactElement => {
  return (
    <NextImage
      alt={alt}
      src={src}
      sizes={sizes}
      fill
      className="object-cover object-center h-full min-h-full min-w-full"
    />
  );
};
