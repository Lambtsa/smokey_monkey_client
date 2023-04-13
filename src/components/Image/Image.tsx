import { StaticImageData } from "next/image";
import { Img } from "./Image.styles";

interface ImageProps {
  src: StaticImageData;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps): JSX.Element => {
  return <Img alt={alt} src={src} fill />;
};
