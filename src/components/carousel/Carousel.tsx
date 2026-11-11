"use client";

import {
  type ReactElement, useCallback, useEffect, useMemo, useState,
} from "react";

import { Icon } from "@/components/icon";
import { Image } from "@/components/image";

import type { CarouselProps } from "./Carousel.types";

const EERIE_BLACK = "#252422";
const EERIE_BLACK_70 = "rgba(37, 36, 34, 0.7)";

const arrowClassName = "absolute top-1/2 -translate-y-1/2 flex justify-center items-center w-10 h-10 rounded-full z-100 bg-ivory/40 transition-all duration-500 hover:bg-ivory/60 disabled:bg-ivory/20";

export const Carousel = ({ images, type }: CarouselProps): ReactElement => {
  /* ############################## */
  /* State */
  /* ############################## */
  const [current, setCurrent] = useState(0);

  const maxImageIndex = useMemo(() => {
    return images.length - 1;
  }, [images]);

  useEffect(() => {
    if (type !== "dot") {
      return;
    }
    const interval = setInterval(() => {
      setCurrent((current) => {
        if (current === maxImageIndex) {
          return 0;
        }
        return current + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [maxImageIndex, type]);

  /* ############################## */
  /* Actions */
  /* ############################## */
  const handleNext = useCallback(() => {
    setCurrent((current) => current + 1);
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrent((current) => current - 1);
  }, []);

  const hasMultipleImages = images.length > 1;
  const isFirst = current === 0;
  const isLast = current === maxImageIndex;

  /* ############################## */
  /* Component */
  /* ############################## */
  return (
    <div className="relative flex justify-center items-center w-full h-full overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full min-w-full min-h-full z-80 bg-eerie-black/30" />
      {images.map((image, index) => (
        <div
          key={image.id}
          className="absolute w-full h-full transition-all duration-500"
          style={{
            transform: `translateX(${(index - current) * 100}%)`,
          }}
        >
          <Image alt={image.alt} src={image.data} sizes="100vw" />
        </div>
      ))}
      {hasMultipleImages && type === "button" && (
        <>
          <button
            type="button"
            aria-label="Next"
            disabled={isLast}
            onClick={handleNext}
            className={`${arrowClassName} right-8`}
          >
            <Icon icon="caret" color={isLast ? EERIE_BLACK_70 : EERIE_BLACK} />
          </button>
          <button
            type="button"
            aria-label="Previous"
            disabled={isFirst}
            onClick={handlePrevious}
            className={`${arrowClassName} left-8`}
          >
            <Icon icon="caret" className="rotate-180" color={isFirst ? EERIE_BLACK_70 : EERIE_BLACK} />
          </button>
        </>
      )}
      {hasMultipleImages && type === "dot" && (
        <div className="absolute bottom-0 flex justify-center items-center w-full gap-1 py-4 z-100 backdrop-blur-[2px]">
          {images.map((image, index) => (
            <button
              type="button"
              aria-label={`${index + 1}`}
              key={image.id}
              onClick={() => setCurrent(index)}
              className={`w-[5px] h-[5px] p-[5px] rounded-full border-[1.5px] border-solid z-20 ${current === index
                ? "border-ivory/80 bg-ivory/80"
                : "border-ivory/50 bg-ivory/30"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
