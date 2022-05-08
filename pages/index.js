import Head from "next/head";
import styles from "../styles/Home.module.css";
import { client } from "../libs/client";
import Link from "next/link";
import Layout, { siteTitle } from "../compornents/layout";

export default function Home({ data }) {
  return (
    <Layout home>
      <div className={styles.container}>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className="text-red-300">Kei Sakurai</h1>
          <div>{data.text}</div>
          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>
          <Link href="/Works">
            <a>Works</a>
          </Link>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "works",
    contentId: "36jdp0c2suh",
  });

  return {
    props: {
      data,
    },
  };
};
