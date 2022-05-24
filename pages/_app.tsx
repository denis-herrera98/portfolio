import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useAnimation,
  useViewportScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { Layout } from "../components/layout/Layout";
import "../styles/app.scss";
import { useNextPage } from "../hooks/useNextPage";
import { NextPageButton } from "../components/buttons/NextPageButton";
import { useRouter } from "next/router";

type SCROLL_ACTION = "DOWN" | "UP";
type PLACE = "LEFT" | "RIGHT";

const DURATION = 0.3;

const squareVariants: Variants = {
  initial: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        y: "0%",
        x: "-100%",
        width: "50%",
        height: "100%",
        transition: { duration: 0 },
      };
    }
    return {
      width: "50%",
      height: "100%",
      x: "200%",
      y: "0%",
      transition: { duration: 0 },
    };
  },
  entering: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        x: ["-100%", "0%"],
        y: "0%",
        transition: { duration: DURATION },
      };
    }
    return {
      x: ["200%", "100%"],
      y: "0%",
      transition: { duration: DURATION },
    };
  },
  splitten: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        width: "100%",
        height: "50%",
        x: "0%",
        y: "0%",
        transition: { duration: 0 },
      };
    }
    return {
      width: "100%",
      height: "50%",
      x: "0%",
      y: "100%",
      transition: { duration: 0 },
    };
  },
  exiting: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        x: "0%",
        y: "-100%",
        transition: { duration: DURATION },
      };
    }

    return {
      x: "0%",
      y: "200%",
      transition: { duration: DURATION },
    };
  },
  completed: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        width: "50%",
        height: "100%",
        x: "0%",
        y: "-100%",
      };
    }
    return {
      width: "50%",
      height: "100%",
      x: "0%",
      y: "200%",
    };
  },
};

// "radial-gradient(circle, var(--clr-secondary) 0%, var(--clr-primary) 100%)",
// "radial-gradient(circle, rgba(108,250,205,1) 0%, rgba(229,129,86,1) 100%)"

const PRIMARY_COLOR = "var(--clr-primary)";
const SECONDARY_COLOR = "var(--clr-secondary)";
const BLUR_RADIUS = "10px";
const SPREAD_RADIUS = "5px";

// backgroundColor: [
//   "radial-gradient(circle, var(--clr-secondary) 0%, var(--clr-primary) 100%)",
//   "radial-gradient(circle, rgba(108,250,205,1) 0%, rgba(229,129,86,1) 100%)",
//boxShadow: `0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${PRIMARY_COLOR},
//   0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${SECONDARY_COLOR} `,
// ],
//
const ball: Variants = {
  initial: (place: PLACE) => ({
    bottom: "-50%",
    width: "1px",
    opacity: 0.8,
    borderRadius: "50%",
    left: place === "LEFT" ? "0%" : "100%",
  }),
  pulsing: (place: PLACE) => ({
    left: place === "LEFT" ? ["0%", "100%"] : ["100%", "0%"],
    scale: [1, 1.2, 2, 1.2, 1],
    opacity: [0.5, 0.7, 0.9, 0.7, 0.5],
    boxShadow: [
      `
      0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${PRIMARY_COLOR}
      `,
      `
      0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${SECONDARY_COLOR}
      `,
      `
      0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${PRIMARY_COLOR}
      `,
      `
      0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${SECONDARY_COLOR}
      `,
    ],
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  }),
  middle: (place: PLACE) => ({
    margin: "0 auto",
    bottom: place === "RIGHT" ? "0%" : "-100%",
    transition: {
      duration: 0,
    },
  }),
  splitten: {
    margin: "0 auto",
    width: "100%",
    opacity: [0.8, 0.3, 0],
    boxShadow: `0px 0px 1px 1px ${SECONDARY_COLOR}, 
                0px 0px 2px 2px ${PRIMARY_COLOR}`,
    transition: {
      duration: 0.5,
    },
  },
  completed: {
    margin: "0 0",
    display: "none",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://localhost:3000/${router.route}`;
  const { showNextPage, showPreviousPage } = useNextPage();
  const [recentScroll, setRecentScroll] = useState<SCROLL_ACTION>();
  const controlsSquare = useAnimation();
  const controlsBalls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  //  useEffect(() => {
  //    const handleRouteChangeComplete = (url: string, { shallow }: any) => {
  //      console.log("COMPLETEE");
  //    };
  //
  //    const onRouteChangeError = (url: string, { shallow }: any) => {
  //      console.log("ERROR");
  //    };
  //
  //    router.events.on("routeChangeStart", handleRouteChange);
  //    router.events.on("routeChangeComplete", handleRouteChangeComplete);
  //    router.events.on("routeChangeError", onRouteChangeError);
  //
  //    return () => {
  //      router.events.off("routeChangeStart", handleRouteChange);
  //      router.events.off("routeChangeComplete", handleRouteChangeComplete);
  //      router.events.off("routeChangeError", onRouteChangeError);
  //    };
  //    // eslint-disable-next-line  react-hooks/exhaustive-deps
  //  }, []);

  const handleScroll = useCallback(
    async (e: WheelEvent) => {
      const handleRouteChange = async () => {
        await controlsSquare.start("initial");
        await controlsBalls.start("initial");

        controlsSquare.start("entering");
        await controlsBalls.start("pulsing");

        await controlsSquare.start("splitten");
        await controlsBalls.start("middle");
        if (e.deltaY > 0) {
          console.log("DOWN");

          setRecentScroll("DOWN");
          showNextPage();
        } else {
          console.log("UP");
          setRecentScroll("UP");
          showPreviousPage();
        }
        await controlsBalls.start("splitten");

        await controlsSquare.start("exiting");

        controlsBalls.start("completed");
        controlsSquare.start("completed");
      };

      await handleRouteChange();
    },
    [showNextPage, showPreviousPage, controlsSquare, controlsBalls]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

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
              variants={ball}
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
              variants={ball}
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
