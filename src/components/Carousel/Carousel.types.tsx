import { StaticImageData } from "next/image";

type CarouselImage = {
  id: string;
  data: StaticImageData;
  alt: string;
};

export interface CarouselProps {
  images: CarouselImage[];
  type: "dot" | "button";
}
