import { Container, Img, InnerContainer } from "./Masonry.styles";
import { StaticImageData } from "next/image";

interface MasonryProps {
  images: StaticImageData[];
}

export const Masonry = ({ images }: MasonryProps): JSX.Element | null => {
  if (!images.length) {
    return null;
  }
  return (
    <Container>
      <InnerContainer>
        {images.map((image, index) => (
          <Img key={index} alt="" src={image} />
        ))}
      </InnerContainer>
    </Container>
  );
};
