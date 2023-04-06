import { Jumbotron } from "@components/Jumbotron";
// import { useTranslation } from "@hooks/useTranslation";
import { Table } from "@components/Table";
import { CentreScreen } from "@components/CentreScreen";
import { Content } from "@components/SplitScreen";

export const TarifsScreen = (): JSX.Element => {
  // const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="pension.jumbotron.title"
        subtitle="pension.jumbotron.subtitle"
      />
      <CentreScreen>
        <Table />
      </CentreScreen>
      <CentreScreen>
        <Content>
          {
            "Le prix de la pension par jour est de 25€/chien/jour, la demi-journée est de 12,50€.\n\nLes pourcentages sont non cumulables. Si toutefois, vous êtes dans plusieurs cas de figures de réduction, nous pratiquons un maximum de 15% de réduction. C’est un tarif unique qu’importe la taille, la race ou l’âge de votre chien et même s’il a un traitement médical.\n\n*En fonction de la durée du séjour et du nombre de chien, un tarif dégressif est possible.\n\n*Pour les chiens adoptés en refuge ou en association de protection animale, une réduction de 10% sera appliquée sur le montant total du séjour, sous condition de présentation du contrat d’adoption."
          }
        </Content>
      </CentreScreen>
    </>
  );
};
