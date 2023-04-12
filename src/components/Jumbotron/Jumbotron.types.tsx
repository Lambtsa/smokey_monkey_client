import { CarouselProps } from "@components/Carousel/Carousel.types";
import { TranslationKey } from "@types";

export interface JumbotronProps {
  title: TranslationKey;
  subtitle: TranslationKey;
  images: CarouselProps["images"];
  type?: CarouselProps["type"];
  link?: {
    text: TranslationKey;
    href: string;
  };
}
