import { Jumbotron } from "@components/Jumbotron";
import { Intro, Location } from "./sections";

export const HomeScreen = (): JSX.Element => {
  return (
    <>
      <Jumbotron
        title="home.jumbotron.title"
        subtitle="home.jumbotron.subtitle"
      />
      <Intro />
      <Location />
    </>
  );
};
