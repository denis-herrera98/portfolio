import { usePresence } from "framer-motion";
import { useEffect } from "react";
import type { NextPage } from "next";
import { Section } from "../components/section/Section";

const TuerquitaWeb: NextPage = () => {
  return (
    <div className="home-page">
      <Section
        title="Personal Proyect"
        subtitle="Tuerquita web"
        description="A web page developed in Next.js. It contains a Party Creator where you can find other League Of Legends players to play with and a real-time chat. Tuerquita Discord Bot would be used to make it work."
      />
    </div>
  );
};

export default TuerquitaWeb;
