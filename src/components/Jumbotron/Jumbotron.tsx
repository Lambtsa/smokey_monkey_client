import {
  Container,
  LinkBtn,
  Subtitle,
  TextContainer,
  Title,
} from "./Jumbotron.styles";
import { useTranslation } from "@hooks/useTranslation";
import { Carousel } from "@components/Carousel";
import { JumbotronProps } from "./Jumbotron.types";

export const Jumbotron = ({
  title,
  subtitle,
  images,
  type = "dot",
  link,
}: JumbotronProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Container>
      <TextContainer>
        <Title>{t({ id: title })}</Title>
        <Subtitle>{t({ id: subtitle })}</Subtitle>
        {link && <LinkBtn href={link.href}>{t({ id: link.text })}</LinkBtn>}
      </TextContainer>
      <Carousel images={images} type={type} />
    </Container>
  );
};
