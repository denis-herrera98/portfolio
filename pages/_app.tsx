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

let variants = {
  startFromDownScroll: { y: "0%", transform: "translateY(-80%)", opacity: 0 },
  startFromUpScroll: { y: "0%", transform: "translateY(80%)", opacity: 0 },
  exitFromUpScroll: { transform: "translateY(80%)", opacity: 0 },
  exitFromDownScroll: { transform: "translateY(-80%)", opacity: 0 },
  enter: { transform: "translateY(0%)", opacity: 1 },
};

type SCROLL_ACTION = "DOWN" | "UP";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://localhost:3000/${router.route}`;
  const { showNextPage, showPreviousPage } = useNextPage();
  const [recentScroll, setRecentScroll] = useState<SCROLL_ACTION>();
  const controls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

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
        </AnimatePresence>
      </Layout>
      <NextPageButton />
    </>
  );
}

export default MyApp;
