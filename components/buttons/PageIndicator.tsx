import { motion, useMotionValue, Variants } from "framer-motion";
import { useRouter } from "next/router";

import { pressVariants, strokeVariants } from "../../configs/framer-motion";
import { usePageTransitioner } from "../../hooks/usePageTransitioner";

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
  const { handleRouteChange } = usePageTransitioner();

  const isActive = path === router.pathname;

  const handleOnClick = () => {
    handleRouteChange({ directPath: path });
  };

  return (
    <button type="button" onClick={handleOnClick}>
      <motion.svg
        width="40"
        height="5"
        initial="hidden"
        animate={isActive ? "activated" : "desactivated"}
        whileHover="whileHover"
      >
        <motion.line
          x2="100%"
          y1="1"
          x1="0"
          y2="1"
          stroke={isActive ? "var(--clr-primary)" : "white"}
          strokeWidth="5"
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
