import Link from "next/link";
import { useEffect, useState } from "react";

const name = "KeiSakurai";
export default function Header() {
  // scroll が高さを超えているとき trueになるstate
  const [isHeightOver, setIsHeightOver] = useState(false);
  useEffect(() => {
    const scrollAction = () => {
      if (window.scrollY > 0) {
        setIsHeightOver(true);
      } else {
        setIsHeightOver(false);
      }
    };
    window.addEventListener("scroll", scrollAction, {
      capture: false,
      passive: true,
    });
    scrollAction();
    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);
  return (
    <header className={isHeightOver ? "header isHeightOver" : "header"}>
      <div className="g-nav__list">
        <Link href="/About">
          <a
            className={
              isHeightOver
                ? "g-nav__list_item isHeightOver"
                : "g-nav__list_item"
            }
          >
            About
          </a>
        </Link>
        <Link href="/">
          <a
            className={
              isHeightOver
                ? "g-nav__list_item logo isHeightOver"
                : "g-nav__list_item logo"
            }
          >
            {name}
          </a>
        </Link>
        <Link href="/Works">
          <a
            className={
              isHeightOver
                ? "g-nav__list_item isHeightOver"
                : "g-nav__list_item"
            }
          >
            Works
          </a>
        </Link>
      </div>
    </header>
  );
}
