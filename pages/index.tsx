import type { NextPage } from "next";
import { Section } from "../components/section/Section";
import { Page } from "../components/layout/Page";

const Home: NextPage = () => {
  return (
    <Page tittle="About myself">
      <Section
        title="Who am I?"
        description="I'm a passionate Full Stack Developer with over 3 years of experience,
        currently working in the industry."
      />
    </Page>
  );
};

export default Home;
