import { motion } from "framer-motion";

import { strokeVariants } from "../../configs/framer-motion";
import { useNextPage } from "../../hooks/useNextPage";

export const NextPageButton = () => {
  const { showNextPage } = useNextPage();
  return (
    <button type="button" onClick={showNextPage} className="next-page-btn">
      <motion.svg
        width="30"
        height="30"
        initial="hidden"
        animate="visible"
        whileHover="onHover"
        transition={{
          type: "spring",
          damping: 10,
          duration: 2,
          stiffness: 100,
        }}
      >
        <motion.circle
          cx="15"
          cy="15"
          r="14"
          stroke={"var(--clr-primary)"}
          fill="transparent"
          strokeWidth={2}
          variants={strokeVariants}
        />
        <motion.line
          x1="15"
          y1="8"
          x2="15"
          y2="20"
          stroke={"var(--clr-primary)"}
          fill="transparent"
          strokeWidth={2}
          variants={strokeVariants}
        />
        <motion.line
          x1="10"
          y1="16"
          x2="15"
          y2="20"
          stroke={"var(--clr-primary)"}
          fill="transparent"
          strokeWidth={2}
          variants={strokeVariants}
        />
        <motion.line
          x1="20"
          y1="16"
          x2="15"
          y2="20"
          stroke={"var(--clr-primary)"}
          fill="transparent"
          strokeWidth={2}
          variants={strokeVariants}
        />
      </motion.svg>
    </button>
  );
};

/*
 *
          <Image
            src={ArrowDownIcon}
            height={30}
            width={30}
            alt="down-arrow"
            className="next-page-btn__icon"
          />
 */
