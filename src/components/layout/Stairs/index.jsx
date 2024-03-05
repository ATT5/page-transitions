import { motion } from "framer-motion";
import Link from "next/link";
import { overlay, expand } from "./animation";
import Image from "next/image";
import github from "@/assets/github.svg";

const Stairs = ({ children }) => {
  const motionProps = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const numOfColumns = 5;

  return (
    <div className="p-5 bg-white w-full h-screen overflow-hidden">
      <motion.div
        className="h-screen w-full fixed top-0 left-0 pointer-events-none bg-black "
        {...motionProps(overlay)}
      />
      <div className="h-screen w-full fixed top-0 left-0 pointer-events-none flex z-30">
        {[...Array(numOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              className="w-screen h-screen bg-black relative"
              {...motionProps(expand, numOfColumns - i)}
            />
          );
        })}
      </div>
      <div className="w-full md:w-1/3 flex justify-between">
        <Link href="/">Swap Out</Link>
        <Link href="/contact">Swap Out</Link>
        <Link href="/about">Stairs</Link>
        <Link href="/stairs">Stairs</Link>
      </div>
      <a
        target="_blank"
        href="https://github.com/ATT5/page-transitions"
        className="absolute top-12 md:top-5 right-5"
      >
        <Image src={github} alt="github" className="w-10 h-10 " />
      </a>
      {children}
    </div>
  );
};

export default Stairs;
