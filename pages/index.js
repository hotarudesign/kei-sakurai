import Head from "next/head";
import { client } from "../libs/client";
import Layout, { siteTitle } from "../compornents/layout";
import { motion } from "framer-motion";
import ScrollEvent from "../compornents/ScrollEvent";
import HomeHero from "../compornents/homeHero";
import Opening from "../compornents/loading";

export default function Home() {
  return (
    <div>
      <Opening />
      <motion.div
        initial={{ opacity: 0 }} // 初期状態
        animate={{ opacity: 1 }} // マウント時
        exit={{ opacity: 1 }} // アンマウント時
      >
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.svg" />
          </Head>
          <main className="home">
            <ScrollEvent />
            <HomeHero />
          </main>
        </Layout>
      </motion.div>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "works",
    contentId: "fhcr9ockl",
  });

  return {
    props: {
      data,
    },
  };
};
