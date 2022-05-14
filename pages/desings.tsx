import { usePresence } from "framer-motion";
import { useEffect } from "react";
import type { NextPage } from "next";
import { Section } from "../components/section/Section";

const Desings: NextPage = () => {
  return (
    <div className="home-page">
      <Section title="DESINGS" subtitle="DESINGS" description="DESINGS" />
    </div>
  );
};

export default Desings;
