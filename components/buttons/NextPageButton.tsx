import { motion, Variants } from "framer-motion";

import { useNextPage } from "../../hooks/useNextPage";

const colorsVariants: Variants = {
  hidden: { fill: "var(--clr-primary)", pathLength: 0 },
  primary: { fill: "var(--clr-primary)", pathLength: 1 },
  secondary: { fill: "#E58156" },
};

export const NextPageButton = () => {
  const { showNextPage } = useNextPage();
  return (
    <button type="button" onClick={showNextPage} className="next-page-btn">
      <motion.svg
        width="25"
        height="25"
        initial="hidden"
        animate="primary"
        whileHover="secondary"
      >
        <motion.path
          d="M25 12.5C25 5.608 19.392 0 12.5 0S0 5.608 0 12.5s5.608 12.5 12.5 12.5S25 19.392 25 12.5zM1.249 12.5c0 -6.204 5.047 -11.251 11.251 -11.251s11.251 5.047 11.251 11.251s-5.047 11.251 -11.251 11.251S1.249 18.704 1.249 12.5z"
          variants={colorsVariants}
        />
        <motion.path
          d="M12.944 18.373l3.512 -3.512c0.245 -0.245 0.245 -0.637 0 -0.882s-0.637 -0.245 -0.882 0l-2.447 2.447V7.071c0 -0.347 -0.28 -0.627 -0.627 -0.627s-0.627 0.28 -0.627 0.627v9.35l-2.447 -2.447c-0.245 -0.245 -0.637 -0.245 -0.882 0s-0.245 0.637 0 0.882l3.512 3.512c0.122 0.122 0.28 0.184 0.444 0.184S12.821 18.495 12.944 18.373z"
          variants={colorsVariants}
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
