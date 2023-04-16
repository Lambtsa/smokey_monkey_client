import { Jumbotron } from "@components/Jumbotron";
// import { useTranslation } from "@hooks/useTranslation";

export const TermsScreen = (): JSX.Element => {
  // const { t } = useTranslation();

  return (
    <>
      <Jumbotron
        title="terms.jumbotron.title"
        subtitle="terms.jumbotron.subtitle"
        images={[]}
      />
    </>
  );
};
