import { motion, Variants } from "framer-motion";

import { useNextPage } from "../../hooks/useNextPage";

const myVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    type: "spring",
    transition: { duration: 1.0, bounce: 0 },
  },
  whileHover: { scale: 1, stroke: "#E58156" },
  whileTap: { scale: 0.6 },
};

export const NextPageButton = () => {
  const { showNextPage } = useNextPage();
  return (
    <button type="button" onClick={showNextPage} className="next-page-btn">
      <motion.svg
        width="52"
        height="52"
        viewBox="0 0 50 50"
        initial="hidden"
        animate="visible"
        whileHover="whileHover"
        variants={myVariants}
        whileTap="whileTap"
        style={{ scale: 0.8 }}
        transition={{
          type: "spring",
          damping: 10,
          duration: 2,
          stiffness: 100,
        }}
      >
        <motion.circle
          cx="25"
          cy="25"
          r="24.5"
          stroke={"var(--clr-primary)"}
          fill="transparent"
          strokeWidth={2}
          variants={myVariants}
        />
        <motion.path
          d="M25 14V36M25 36L18 29M25 36L32 29"
          stroke={"var(--clr-primary)"}
          fill="transparent"
          strokeWidth={2}
          variants={myVariants}
        />
      </motion.svg>
    </button>
  );
};
