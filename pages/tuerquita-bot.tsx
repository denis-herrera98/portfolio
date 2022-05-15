import type { NextPage } from "next";
import { Section } from "../components/section/Section";

const TuerquitaBot: NextPage = () => {
  return (
    <div className="page">
      <h1 className="page__title"> Personal Project </h1>

      <div className="project-page">
        <Section title="BOOOOT" description="BOOOOT" />
      </div>
    </div>
  );
};

export default TuerquitaBot;
