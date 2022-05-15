import Link from "next/link";
import styles from "./layout.module.css";
import Head from "next/head";

const name = "KeiSakurai";
export const siteTitle = "Kei Sakurai portfolio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="KeiSakuraiのポートフォリオです。" />
      </Head>
      <header className="header">
        <div className="g-nav__list">
          <Link href="/About">
            <a className="g-nav__list_item">About</a>
          </Link>
          <Link href="/">
            <a className="g-nav__list_item logo">{name}</a>
          </Link>
          <Link href="/Works">
            <a className="g-nav__list_item">Works</a>
          </Link>
        </div>
        <Link href="/">
          <a className="g-nav__list_item logo_sp">
            Kei
            <br />
            Sakurai
          </a>
        </Link>
      </header>
      <main>{children}</main>
      {!home && (
        <footer className="footer">
          <div className="footer__inner">
            <ul className="footer__list">
              <li className="footer__list_item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="footer__list_item">
                <Link href="/About">
                  <a>About</a>
                </Link>
              </li>
              <li className="footer__list_item">
                <Link href="/Works">
                  <a>Works</a>
                </Link>
              </li>
            </ul>
            <small>©︎ KeiSakurai All Rights Reserved.</small>
          </div>
        </footer>
      )}
    </div>
  );
}
