import { Variants } from "framer-motion";

export const strokeVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    type: "spring",
    transition: { duration: 1.0, bounce: 0 },
  },
  onHover: {
    scale: 1.025,
    stroke: "#E58156",
  },
};

export const pressVariants: Variants = {
  whileHover: { scale: 1.2, stroke: "#E58156" },
  whileTap: { scale: 0.8 },
};

type PLACE = "LEFT" | "RIGHT";

const DURATION = 0.2;

export const squareVariants: Variants = {
  initial: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        y: "0%",
        x: "-100%",
        width: "50%",
        height: "100%",
        transition: { duration: 0 },
      };
    }
    return {
      width: "50%",
      height: "100%",
      x: "200%",
      y: "0%",
      transition: { duration: 0 },
    };
  },
  entering: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        x: ["-100%", "0%"],
        y: "0%",
        transition: { duration: DURATION },
      };
    }
    return {
      x: ["200%", "100%"],
      y: "0%",
      transition: { duration: DURATION },
    };
  },
  splitten: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        width: "100%",
        height: "50%",
        x: "0%",
        y: "0%",
        transition: { duration: 0 },
      };
    }
    return {
      width: "100%",
      height: "50%",
      x: "0%",
      y: "100%",
      transition: { duration: 0 },
    };
  },
  exiting: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        x: "0%",
        y: "-100%",
        transition: { duration: DURATION },
      };
    }

    return {
      x: "0%",
      y: "200%",
      transition: { duration: DURATION },
    };
  },
  completed: (place: PLACE) => {
    if (place === "LEFT") {
      return {
        width: "50%",
        height: "100%",
        x: "0%",
        y: "-100%",
      };
    }
    return {
      width: "50%",
      height: "100%",
      x: "0%",
      y: "200%",
    };
  },
};

const PRIMARY_COLOR = "var(--clr-primary)";
const SECONDARY_COLOR = "var(--clr-secondary)";
const BLUR_RADIUS = "10px";
const SPREAD_RADIUS = "5px";

export const ballVariants: Variants = {
  initial: (place: PLACE) => ({
    bottom: "-50%",
    width: "1px",
    opacity: 0.8,
    borderRadius: "50%",
    left: place === "LEFT" ? "0%" : "100%",
    transition: {
      duration: 0,
    },
  }),
  pulsing: (place: PLACE) => ({
    left: place === "LEFT" ? ["0%", "100%"] : ["100%", "0%"],
    scale: [1, 1.2, 2, 1.2, 1],
    opacity: [0.5, 0.7, 0.9, 0.7, 0.5],
    boxShadow: [
      `
      0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${PRIMARY_COLOR}
      `,
      `
      0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${SECONDARY_COLOR}
      `,
      `
      0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${PRIMARY_COLOR}
      `,
      `
      0px 0px ${BLUR_RADIUS} ${SPREAD_RADIUS} ${SECONDARY_COLOR}
      `,
    ],
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  }),
  middle: (place: PLACE) => ({
    margin: "0 auto",
    bottom: place === "RIGHT" ? "0%" : "-100%",
    transition: {
      duration: 0,
    },
  }),
  splitten: {
    margin: "0 auto",
    width: "100%",
    opacity: [0.8, 0.3, 0],
    boxShadow: `0px 0px 1px 1px ${SECONDARY_COLOR}, 
                0px 0px 2px 2px ${PRIMARY_COLOR}`,
    transition: {
      duration: 0.3,
    },
  },
  completed: {
    margin: "0 0",
    display: "none",
  },
};
