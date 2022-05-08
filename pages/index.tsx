import Head from "next/head";
import { client } from "../libs/client";
import Link from "next/link";
import Layout, { siteTitle } from "../compornents/layout";
import { GetStaticProps } from "next";

export default function Home({ data }) {
  return (
    <Layout home>
      <div className="">
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="">
          <h1 className="">Kei Sakurai</h1>
          <div>{data.text}</div>
          <p className="">
            Get started by editing <code className="">pages/index.js</code>
          </p>
          <Link href="/Works">
            <a>Works</a>
          </Link>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
