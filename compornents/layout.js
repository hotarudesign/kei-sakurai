import Home from "../pages";
import Link from "next/link";
import styles from "./layout.module.css";
import Head from "next/head";

const name = "Kei Sakurai";
export const siteTitle = "Kei Sakurai portfolio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="KeiSakuraiのポートフォリオです。" />
      </Head>
      <header>
        <div className="flex">
          <Link href="/About">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>
              <h1>{name}</h1>
            </a>
          </Link>
          <Link href="/Works">
            <a>Works</a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <footer>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/Works">
                <a>Works</a>
              </Link>
            </li>
          </ul>
        </footer>
      )}
    </div>
  );
}
