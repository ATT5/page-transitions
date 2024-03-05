import { motion } from "framer-motion";
import Link from "next/link";
import { slide, opacity, perspective } from "./animation";
import Image from "next/image";
import github from "@/assets/github.svg";

const Inner = ({ children }) => {
  const motionProps = (variants) => {
    return { initial: "initial", animate: "enter", exit: "exit", variants };
  };

  return (
    <div className=" bg-black w-full h-screen overflow-hidden">
      <motion.div
        {...motionProps(slide)}
        className="fixed top-0 left-0 bg-white w-full h-full z-20"
      />
      <motion.div
        {...motionProps(perspective)}
        className="w-full h-screen  p-5 bg-white"
      >
        <motion.div {...motionProps(opacity)}>
          <div className="w-full md:w-1/3 flex justify-between">
            <Link href="/">Swap Out</Link>
            <Link href="/contact">Swap Out</Link>
            <Link href="/about">Stairs</Link>
            <Link href="/stairs">Stairs</Link>
          </div>
          {children}
          <a
            target="_blank"
            href="https://github.com/ATT5/page-transitions"
            className="absolute md:top-5 right-5 top-12"
          >
            <Image src={github} alt="github" className="w-10 h-10 " />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
