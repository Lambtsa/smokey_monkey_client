import { v4 as uuid } from "uuid";
import Ribs from "@assets/images/ribs.webp";
import { Jumbotron } from "@components/Jumbotron";

export const BarScreen = (): JSX.Element => {
  return (
    <>
      <Jumbotron
        title="gite.title"
        subtitle="gite.subtitle"
        images={[
          {
            id: uuid(),
            data: Ribs,
            alt: "",
          },
        ]}
        link={{ text: "gite.btn", href: "#reservation" }}
      />
    </>
  );
};
