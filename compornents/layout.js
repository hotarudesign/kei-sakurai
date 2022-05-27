import styles from "./layout.module.css";
import Head from "next/head";
import Header from "../compornents/header";
import Footer from "../compornents/footer";

export const siteTitle = "Kei Sakurai portfolio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="KeiSakuraiのポートフォリオです。" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main>{children}</main>
      {!home && <Footer />}
    </div>
  );
}
