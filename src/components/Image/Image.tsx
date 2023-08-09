import { StaticImageData } from "next/image";
import { Img } from "./Image.styles";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
}

export const Image = ({
  src,
  alt,
  sizes,
  priority = false,
}: ImageProps): JSX.Element => {
  return <Img alt={alt} src={src} sizes={sizes} priority={priority} fill />;
};
