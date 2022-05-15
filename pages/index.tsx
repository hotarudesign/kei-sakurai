import Head from "next/head";
import { client } from "../libs/client";
import Link from "next/link";
import Layout, { siteTitle } from "../compornents/layout";
import { GetStaticProps } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ScrollEvent from "../compornents/ScrollEvent";

export default function Home({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
    >
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="home">
          <ScrollEvent />
          <p className="home__hero">Coding and Design</p>
        </main>
      </Layout>
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
