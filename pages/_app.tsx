import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { Layout } from "../components/layout/Layout";
import "../styles/app.scss";
import { useNextPage } from "../hooks/useNextPage";
import { NextPageButton } from "../components/buttons/NextPageButton";
import { useRouter } from "next/router";

let variants = {
  startFromDownScroll: { y: "0%", transform: "translateY(-80%)", opacity: 0 },
  startFromUpScroll: { y: "0%", transform: "translateY(80%)", opacity: 0 },
  exitFromUpScroll: { transform: "translateY(80%)", opacity: 0 },
  exitFromDownScroll: { transform: "translateY(-80%)", opacity: 0 },
  enter: { transform: "translateY(0%)", opacity: 1 },
};

type SCROLL_ACTION = "DOWN" | "UP";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://localhost:3000/${router.route}`;
  const { showNextPage, showPreviousPage } = useNextPage();
  const [recentScroll, setRecentScroll] = useState<SCROLL_ACTION>();
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = (url: string, { shallow }: any) => {
      console.log("EMPEZANDOP");
      setShowLoader(true);
    };

    const handleRouteChangeComplete = (url: string, { shallow }: any) => {
      console.log("COMPLETEE");
      // setShowLoader(false);
    };

    const onRouteChangeError = (url: string, { shallow }: any) => {
      console.log("ERROR");
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", onRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", onRouteChangeError);
    };
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0) {
        console.log("DOWN");

        setRecentScroll("DOWN");
        showNextPage();
      } else {
        console.log("UP");
        setRecentScroll("UP");
        showPreviousPage();
      }
    },
    [showNextPage, showPreviousPage]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  const howToExit =
    recentScroll === "UP"
      ? { transform: "translateY(80%)", opacity: 0 }
      : { transform: "translateY(-80%)", opacity: 0 };

  const howToEnter =
    recentScroll === "UP"
      ? { transform: "translateY(-80%)", opacity: 0 }
      : { transform: "translateY(80%)", opacity: 0 };

  const enter = { transform: "translateY(0%)", opacity: 1 };

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
        <AnimatePresence exitBeforeEnter>
          {showLoader ? (
            <div className="transitioner">
              <motion.div
                initial={{ scale: 0.7 }}
                onAnimationComplete={() => setShowLoader(false)}
                animate={{
                  opacity: [1, 0, 1, 0, 1, 0],
                  //opacity: [0.8, 0.5, 0.4, 0.2, 0],
                  scale: 10,
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                exit={{ opacity: 0, scale: 0.7 }}
                key={url}
                style={{
                  background: "white",
                  //background: "var(--clr-grey-65)",
                  borderRadius: "30px",
                  width: "150px",
                  height: "150px",
                }}
                transition={{
                  duration: 0.1,
                  ease: "easeInOut",
                  times: [1],
                  repeat: Infinity,
                }}
              />
            </div>
          ) : (
            <motion.main
              className="content__main"
              // animate={controls}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              key={url}
              style={{ height: "100%" }}
              transition={{ type: "linear", duration: 0.4 }}
            >
              <Component {...pageProps} key={url} />
            </motion.main>
          )}
        </AnimatePresence>
      </Layout>
      <NextPageButton />
    </>
  );
}

export default MyApp;
