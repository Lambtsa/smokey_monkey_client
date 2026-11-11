import type { CarouselProps } from "@/components/carousel/Carousel.types";
import type { TranslationKey } from "@/types/translations";

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
