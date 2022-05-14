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
