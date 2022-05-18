import type { NextPage } from "next";
import { Section } from "../components/section/Section";

const Home: NextPage = () => {
  return (
    <div className="page">
      <h1 className="page__title"> About myself </h1>
      <div className="page__body">
        <Section
          title="Who am I?"
          description="I'm a passionate Full Stack Developer with over 3 years of experience,
        currently working in the industry."
        />
      </div>
    </div>
  );
};

export default Home;
