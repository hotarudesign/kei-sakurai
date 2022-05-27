import Link from "next/link";

export default function Footer() {
  return (
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
  );
}
