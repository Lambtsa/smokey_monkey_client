import { MetaData } from "@components/MetaData";
import type { NextPage } from "next";
import { pageData } from "@helpers/metadata";
import { Layout } from "@components/Layout";
import { TeamScreen } from "@screens/Team";

const TeamPage: NextPage = () => {
  const { team } = pageData;
  return (
    <Layout>
      <MetaData
        title={team.title}
        description={team.description}
        url={team.url}
      />
      <TeamScreen />
    </Layout>
  );
};

export default TeamPage;
