import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "config/metadata";
import { Layout } from "@components/Layout";
import { ReservationScreen } from "@screens/Reservation";

const ReservationPage: NextPage = () => {
  const {
    restaurant: { reservation },
  } = pageData;
  return (
    <Layout>
      <MetaData
        title={reservation.title}
        description={reservation.description}
        url={reservation.url}
      />
      <ReservationScreen />
    </Layout>
  );
};

export default ReservationPage;
