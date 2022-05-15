import { motion, useMotionValue, Variants } from "framer-motion";
import { useRouter } from "next/router";

import { pressVariants, strokeVariants } from "../../configs/framer-motion";

interface Props {
  path: string;
}

const myVariants = {
  ...strokeVariants,
  ...pressVariants,
  activated: { pathLength: 1 },
  desactivated: { pathLength: 0.5 },
};

export const PageIndicator = ({ path }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(path);
  };

  const isActive = path === router.pathname;

  return (
    <button type="button" onClick={handleOnClick}>
      <motion.svg
        width="40"
        height="5"
        initial="hidden"
        animate={isActive ? "activated" : "desactivated"}
        whileHover="whileHover"
        variants={pressVariants}
      >
        <motion.line
          transition={{
            pathLength: { type: "spring", duration: 3.5 },
          }}
          x2="100%"
          y1="1"
          x1="0"
          y2="1"
          stroke={isActive ? "var(--clr-primary)" : "white"}
          strokeWidth="5"
          variants={myVariants}
          custom={isActive}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </button>
  );
};

//  className={
//    isActive ? "page-indicator page-indicator__active" : "page-indicator"
//  }
