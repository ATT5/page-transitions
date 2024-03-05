export const expand = {
  initial: {
    top: 0,
  },
  enter: (i) => ({
    top: "100vh",
    transition: {
      duration: 0.5,
      delay: 0.1 * i,
    },
    transitionEnd: {
      height: 0,
      top: 0,
    },
  }),
  exit: (i) => ({
    height: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.1 * i,
    },
  }),
};

export const overlay = {
  initial: { opacity: 0.5 },
  enter: { opacity: 0 },
  exit: { opacity: 0.5 },
};
