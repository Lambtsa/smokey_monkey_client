import Dogs from "@assets/images/dogs.jpeg";
import { useTranslation } from "@hooks/useTranslation";
import {
  Container,
  TitleContainer,
  Title,
  Content,
  Subtitle,
  SplitScreenContainer,
  SplitScreenWrapper,
  InnerContainer,
  Img,
} from "./Team.styles";
import { Jumbotron } from "@components/Jumbotron";

export const TeamScreen = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="team.jumbotron.title"
        subtitle="team.jumbotron.subtitle"
      />
      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container>
              <TitleContainer>
                <Title>{t({ id: "team.olympe.title" })}</Title>
                <Subtitle>{t({ id: "team.olympe.subtitle" })}</Subtitle>
              </TitleContainer>
              <Content>
                {
                  "Je suis éducateur canin. Formée au CFPPA de l’épine, j’ai obtenu mon brevet professionnel en 2020. J’ai commencé en janvier 2021 avec des cours en éducation canine principalement. Par la suite, j’ai fait de la pension pour les chiens de mes clients. Et j’ai été piqué par le plaisir d’avoir plusieurs chiens à la maison.\n\nPour mon histoire et ma passion : J’ai mis les pieds dans ce monde canin avec l’arrivée de ma première chienne : Noune, ma croisée berger allemand.J’ai eu des chiens lorsque j’étais petite, mais la relation et la réflexion ainsi que la responsabilité n’est pas la même."
                }
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Img alt="" src={Dogs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Img alt="" src={Dogs} />
          </InnerContainer>
          <InnerContainer>
            <Container>
              <TitleContainer>
                <Title>{t({ id: "team.olympe.title" })}</Title>
                <Subtitle>{t({ id: "team.olympe.subtitle" })}</Subtitle>
              </TitleContainer>
              <Content>
                {
                  "Noune m’a amené a beaucoup de réflexion et a un 1er grand chamboulement dans ma vie professionnelle. Après, c’est Laïka ma border qui a débarqué et a rajouté une couche !\n\nPar la suite, lorsque j’étais éducatrice, j’ai accueilli Marley. A l’époque c’était un jeune border de 8 mois, avec quelques soucis d’autocontrole : gestion de frustration, d’excitation,  de stop… je devais être simplement famille d’accueil et l’aider à l’éduquer pour l’association Les borders et Nous que préside Vincent. Mais bon… Marley a su m’amadouer et sortir les bonnes cartes. C’est ainsi qu’il est devenu mon 3ème chien.\n\nVous verrez sûrement plus nos chiens en photos et en vidéos ! Au plaisir de se voir en vrai!"
                }
              </Content>
            </Container>
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container>
              <TitleContainer>
                <Title>{t({ id: "team.vincent.title" })}</Title>
                <Subtitle>{t({ id: "team.vincent.subtitle" })}</Subtitle>
              </TitleContainer>
              <Content>
                {
                  "Passionné depuis mon plus jeune âge par les chiens, leur consacrer mon activité professionnelle restait néanmoins un rêve de gosse ! Je me décris comme un « éternel étudiant » ; apprendre, comprendre, se remettre en question, chercher le meilleur pour nos animaux.\n\nÉtant également passionné par les voyages, j’aime rencontrer des gens, échanger les cultures et aborder de nouvelles expériences… Et pour réunir mes passions, chien et voyage, Les Copains de Maui m’est apparue comme une évidence.\n\nEn consacrant énormément de temps à l’éducation de Maui, sa socialisation, j’ai fini par créer mon propre groupe de sorties canines dans le but d’aider les autres à mon niveau."
                }
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Img alt="" src={Dogs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Img alt="" src={Dogs} />
          </InnerContainer>
          <InnerContainer>
            <Container>
              <TitleContainer>
                <Title>{t({ id: "team.vincent.title" })}</Title>
                <Subtitle>{t({ id: "team.vincent.subtitle" })}</Subtitle>
              </TitleContainer>
              <Content>
                {
                  "Randonnées hebdomadaires, balades collectives, troupeau et cani-roller à l’occasion, font notre bonheur ! Puis le Border Collie est devenu une passion plus forte, je suis alors devenu bénévole et Famille d’Accueil pour cette race, en partenariat avec des associations et refuges.\n\nC’est à ce moment également que j’ai adopté mon ptit cochon ma deuxième chienne, Vanellopé !\n\nDe plus en plus sollicité pour aider et replacer des chiens, j’ai décidé de créer mon association. Ce qui me permet d’enrichir chaque jour mes compétences dans le domaine canin, dans les relations humaines et dans une gestion équivalente à celle d’une petite entreprise. "
                }
              </Content>
            </Container>
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>

      <SplitScreenContainer>
        <SplitScreenWrapper>
          <InnerContainer>
            <Container>
              <TitleContainer>
                <Title>{t({ id: "team.vincent.title" })}</Title>
                <Subtitle>{t({ id: "team.vincent.subtitle" })}</Subtitle>
              </TitleContainer>
              <Content>
                {
                  "Aujourd’hui, je suis le président de l’association Les Borders Et Nous.Entouré d’une formidable équipe et en pleine croissance, ce qui nous permet de faire de plus en plus de sauvetages ! Les formations acquises en plus de mes expériences personnelles :\n\nAttestation de Connaissances pour les Animaux de Compagnie d’Espèces Domestiques par « VoxAnimae »\n\nPremiers secours Canins et Félins par « Pause Canine »\n\nFormation détenteur chiens 1ère et 2ème catégorie par « Les deux complices »\n\nParcours Créateur par la Chambre des Métiers d’Alsace"
                }
              </Content>
            </Container>
          </InnerContainer>
          <InnerContainer>
            <Img alt="" src={Dogs} />
          </InnerContainer>
        </SplitScreenWrapper>
      </SplitScreenContainer>
    </>
  );
};
