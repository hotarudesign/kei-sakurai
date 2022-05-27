import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "../styles/globals.scss";

export default function App({ Component, pageProps, router }) {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
