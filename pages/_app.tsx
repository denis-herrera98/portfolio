import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { motion } from "framer-motion";
import { Layout } from "../components/layout/Layout";
import "../styles/app.scss";
import { NextPageButton } from "../components/buttons/NextPageButton";
import { useRouter } from "next/router";
import { usePageTransitioner } from "../hooks/usePageTransitioner";
import { squareVariants, ballVariants } from "../configs/framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://localhost:3000/${router.route}`;
  const { controlsSquare, controlsBalls } = usePageTransitioner();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Denis Herrera"
        openGraph={{
          type: "website",
          locale: "",
          url,
          description: "The personal website for Denis Herrera, developer.",
          site_name: "",
          images: [],
        }}
        canonical={url}
      />
      <Layout>
        <main className="content__main">
          <motion.div
            className="content__square content__square-right"
            variants={squareVariants}
            animate={controlsSquare}
            initial={true}
            custom={"RIGHT"}
          >
            <motion.div
              className="content__square-ball"
              variants={ballVariants}
              animate={controlsBalls}
              initial={true}
              custom={"RIGHT"}
            />
          </motion.div>

          <motion.div
            className="content__square content__square-left"
            variants={squareVariants}
            animate={controlsSquare}
            initial={true}
            custom={"LEFT"}
          >
            <motion.div
              className="content__square-ball"
              variants={ballVariants}
              initial={true}
              animate={controlsBalls}
              custom={"LEFT"}
            />
          </motion.div>

          <Component {...pageProps} key={url} />
        </main>
      </Layout>
    </>
  );
}
// <NextPageButton />

export default MyApp;

const myVariants = {
  hidden: { pathLength: 0, opacity: 0.1 },
  visible: {
    opacity: 0.3,
    pathLength: 1,
    transition: { duration: 1.0, bounce: 0 },
    scaleY: 2,
  },
};

const SvgLoco = ({
  setShowLoader,
}: {
  setShowLoader: (hola: boolean) => void;
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      onAnimationComplete={() => setShowLoader(false)}
      version="1.1"
      width="1440"
      height="560"
      preserveAspectRatio="none"
      initial="hidden"
      animate="visible"
      whileHover="whileHover"
      variants={myVariants}
      viewBox="0 0 1440 560"
    >
      <g mask='url("#SvgjsMask1038")' fill="none">
        <motion.path
          d="M874 495L873 163"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1039)"
          strokeLinecap="round"
          className="Up"
          variants={myVariants}
        ></motion.path>
        <motion.path
          d="M1118 118L1117 294"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1039)"
          strokeLinecap="round"
          className="Up"
          variants={myVariants}
        ></motion.path>
        <motion.path
          d="M272 392L271 773"
          strokeWidth="8"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M489 58L488 -348"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1041)"
          variants={myVariants}
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M1136 199L1135 533"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1039)"
          strokeLinecap="round"
          variants={myVariants}
          className="Up"
        ></motion.path>
        <motion.path
          d="M947 295L946 447"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1039)"
          strokeLinecap="round"
          variants={myVariants}
          className="Up"
        ></motion.path>
        <motion.path
          d="M525 246L524 407"
          strokeWidth="8"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1041)"
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M350 290L349 478"
          strokeWidth="8"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1039)"
          strokeLinecap="round"
          className="Up"
        ></motion.path>
        <motion.path
          d="M974 307L973 38"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          variants={myVariants}
          className="Down"
        ></motion.path>
        <motion.path
          d="M922 228L921 51"
          strokeWidth="6"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M966 2L965 -354"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1040)"
          variants={myVariants}
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M905 32L904 -256"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          className="Down"
          variants={myVariants}
        ></motion.path>
        <motion.path
          d="M1083 119L1082 284"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1039)"
          variants={myVariants}
          strokeLinecap="round"
          className="Up"
        ></motion.path>
        <motion.path
          d="M72 410L71 625"
          strokeWidth="10"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1042)"
          strokeLinecap="round"
          className="Up"
        ></motion.path>
        <motion.path
          d="M6 19L5 316"
          strokeWidth="6"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1041)"
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M1316 518L1315 659"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1040)"
          variants={myVariants}
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M1183 154L1182 422"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1039)"
          strokeLinecap="round"
          variants={myVariants}
          className="Up"
        ></motion.path>
        <motion.path
          d="M419 462L418 167"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          className="Down"
          variants={myVariants}
        ></motion.path>
        <motion.path
          d="M1233 511L1232 668"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1041)"
          strokeLinecap="round"
          variants={myVariants}
          className="Down"
        ></motion.path>
        <motion.path
          d="M538 347L537 28"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1039)"
          variants={myVariants}
          strokeLinecap="round"
          className="Up"
        ></motion.path>
        <motion.path
          d="M885 310L884 685"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1042)"
          variants={myVariants}
          strokeLinecap="round"
          className="Up"
        ></motion.path>
        <motion.path
          d="M1319 430L1318 268"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1041)"
          strokeLinecap="round"
          className="Down"
          variants={myVariants}
        ></motion.path>
        <motion.path
          d="M1375 385L1374 170"
          strokeWidth="6"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1041)"
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          variants={myVariants}
          d="M1128 536L1127 761"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M711 10L710 -330"
          strokeWidth="8"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M1312 132L1311 539"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1039)"
          strokeLinecap="round"
          variants={myVariants}
          className="Up"
        ></motion.path>
        <motion.path
          d="M1079 262L1078 645"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1041)"
          variants={myVariants}
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M917 340L916 515"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1041)"
          strokeLinecap="round"
          variants={myVariants}
          className="Down"
        ></motion.path>
        <motion.path
          d="M600 437L599 188"
          strokeWidth="10"
          variants={myVariants}
          stroke="url(#SvgjsLinearGradient1039)"
          strokeLinecap="round"
          className="Up"
        ></motion.path>
        <motion.path
          d="M879 406L878 690"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1040)"
          variants={myVariants}
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M1237 334L1236 705"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1039)"
          variants={myVariants}
          strokeLinecap="round"
          className="Up"
        ></motion.path>
        <motion.path
          d="M892 195L891 -85"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          variants={myVariants}
          className="Down"
        ></motion.path>
        <motion.path
          d="M974 547L973 743"
          strokeWidth="8"
          stroke="url(#SvgjsLinearGradient1041)"
          variants={myVariants}
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M33 475L32 646"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1041)"
          variants={myVariants}
          strokeLinecap="round"
          className="Down"
        ></motion.path>
        <motion.path
          d="M1113 171L1112 17"
          strokeWidth="10"
          stroke="url(#SvgjsLinearGradient1040)"
          strokeLinecap="round"
          variants={myVariants}
          className="Down"
        ></motion.path>
        <motion.path
          d="M187 476L186 317"
          strokeWidth="6"
          stroke="url(#SvgjsLinearGradient1041)"
          variants={myVariants}
          strokeLinecap="round"
          className="Down"
        ></motion.path>
      </g>
      <defs>
        <mask id="SvgjsMask1038">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
          id="SvgjsLinearGradient1039"
        >
          <stop stopColor="rgba(229, 129, 86, 0)" offset="0"></stop>
          <stop stopColor="rgba(229, 129, 86, 1)" offset="1"></stop>
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          id="SvgjsLinearGradient1040"
        >
          <stop stopColor="rgba(229, 129, 86, 0)" offset="0"></stop>
          <stop stopColor="rgba(229, 129, 86, 1)" offset="1"></stop>
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          id="SvgjsLinearGradient1041"
        >
          <stop stopColor="rgba(108, 250, 205, 0)" offset="0"></stop>
          <stop stopColor="rgba(108, 250, 205, 1)" offset="1"></stop>
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="100%"
          x2="0%"
          y2="0%"
          id="SvgjsLinearGradient1042"
        >
          <stop stopColor="rgba(108, 250, 205, 0)" offset="0"></stop>
          <stop stopColor="rgba(108, 250, 205, 1)" offset="1"></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
