import type { NextPage } from "next";
import { Section } from "../components/section/Section";

const Desings: NextPage = () => {
  return (
    <div className="page">
      <h1 className="page__title"> My Desings </h1>
      <div className="page__body">
        <Section title="DESINGS" description="DESINGS" />
      </div>
    </div>
  );
};

export default Desings;
