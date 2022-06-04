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
import { AnimationControllersProvider } from "../context/animation-controllers-context";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://localhost:3000${router.route}`;
  usePageTransitioner();

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
      <AnimationControllersProvider>
        {({ controlsSquare, controlsBalls }) => (
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
        )}
      </AnimationControllersProvider>
    </>
  );
}
// <NextPageButton />

export default MyApp;
