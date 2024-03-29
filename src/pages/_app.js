import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
