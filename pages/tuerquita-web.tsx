import type { NextPage } from "next";
import {
  NextJs,
  Redux,
  Sass,
  SocketIo,
  Typescript,
} from "../components/assets/svgs";
import { Section } from "../components/section/Section";
import { Technologies } from "../components/section/Technologie";
import { TechnologiesDisplayer } from "../components/section/TechnologiesDisplayer";
import { Page } from "../components/layout/Page";

const myTecnologies = [
  { name: "Sass", icon: Sass },
  { name: "Typescript", icon: Typescript },
  { name: "Next.js", icon: NextJs },
  { name: "Redux", icon: Redux },
  { name: "Socket.io", icon: SocketIo },
];

const TuerquitaWeb: NextPage = () => {
  return (
    <Page tittle="Personal Project">
      <Section
        title="Tuerquita web"
        description="A web page developed in Next.js. It contains a Party Creator where you can find other League Of Legends players to play with and a real-time chat."
      />
      <TechnologiesDisplayer>
        {myTecnologies.map((tecnologie, i) => (
          <Technologies height={30} width={30} {...tecnologie} key={i} />
        ))}
      </TechnologiesDisplayer>
    </Page>
  );
};

export default TuerquitaWeb;
