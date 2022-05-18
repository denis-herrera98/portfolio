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
