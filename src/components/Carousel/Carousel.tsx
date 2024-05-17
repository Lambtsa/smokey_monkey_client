import {
  Container,
  ContainerFilter,
  DotBtn,
  DotBtnContainer,
  ImgBtn,
  ImgContainer,
} from "./Carousel.styles";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ReactComponent as Caret } from "@assets/caret.svg";
import { CarouselProps } from "./Carousel.types";
import { Image } from "@components/Image";

export const Carousel = ({ images, type }: CarouselProps): JSX.Element => {
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

  const calculateCurrentPosition = useCallback(
    (index: number) => {
      return index - current;
    },
    [current],
  );

  const hasMultipleImages = useMemo(() => {
    return images.length > 1;
  }, [images.length]);

  const hasImages = useMemo(() => {
    return !!images.length;
  }, [images.length]);

  /* ############################## */
  /* Component */
  /* ############################## */
  return (
    <Container>
      <ContainerFilter />
      {hasImages &&
        images.map((image, index) => (
          <ImgContainer
            $imgPosition={calculateCurrentPosition(index)}
            key={image.id}
          >
            <Image alt={image.alt} sizes="100vw" src={image.data} />
          </ImgContainer>
        ))}
      {hasMultipleImages && type === "button" && (
        <>
          <ImgBtn
            disabled={current === maxImageIndex}
            $btnType="next"
            onClick={handleNext}
          >
            <Caret />
          </ImgBtn>
          <ImgBtn
            disabled={current === 0}
            $btnType="previous"
            onClick={handlePrevious}
          >
            <Caret />
          </ImgBtn>
        </>
      )}
      {hasMultipleImages && type === "dot" && (
        <DotBtnContainer>
          {images.map((image, index) => (
            <DotBtn
              $active={current === index}
              key={image.id}
              onClick={() => setCurrent(index)}
            />
          ))}
        </DotBtnContainer>
      )}
    </Container>
  );
};
