import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { pressVariants } from "../../configs/framer-motion";

interface Props {
  name: string;
  icon: string;
  height: number;
  width: number;
}

export const SocialNetwork = ({ name, icon, height, width }: Props) => {
  return (
    <motion.div
      className="social-network"
      whileHover="whileHover"
      whileTap="whileTap"
      variants={pressVariants}
    >
      <Image
        src={icon}
        height={height}
        width={width}
        alt="social-network"
        className="social-network__icon"
      />
      <AnimatePresence>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="social-network__name"
        >
          {name}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};
