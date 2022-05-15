import type { NextPage } from "next";
import { Section } from "../components/section/Section";

const Home: NextPage = () => {
  return (
    <div className="page">
      <Section
        title="Who am I?"
        subtitle="ABOUT MEEEweb"
        description="I'm a passionate Full Stack Developer with over 3 years of experience,
        currently working in the industry."
      />
    </div>
  );
};

export default Home;
