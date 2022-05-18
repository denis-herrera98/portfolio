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
import { ITecnologie } from "../interfaces/technologie";

const myTecnologies: ITecnologie[] = [
  { name: "Sass", icon: Sass },
  { name: "Typescript", icon: Typescript },
  { name: "Next.js", icon: NextJs },
  { name: "Redux", icon: Redux },
  { name: "Socket.io", icon: SocketIo },
];

const TuerquitaWeb: NextPage = () => {
  return (
    <div className="page ">
      <h1 className="page__title"> Personal Project </h1>
      <div className="page__body">
        <Section
          title="Tuerquita web"
          description="A web page developed in Next.js. It contains a Party Creator where you can find other League Of Legends players to play with and a real-time chat."
        />
        <TechnologiesDisplayer>
          {myTecnologies.map((tecnologie, i) => (
            <Technologies height={30} width={30} {...tecnologie} key={i} />
          ))}
        </TechnologiesDisplayer>
      </div>
    </div>
  );
};

export default TuerquitaWeb;
