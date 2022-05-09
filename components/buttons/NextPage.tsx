import Image from "next/image";

import ArrowDownIcon from "../../assets/down-arrow.svg";

export const NextPageButton = () => {
  return <Image src={ArrowDownIcon} height={50} width={50} alt="down-arrow" />;
};
