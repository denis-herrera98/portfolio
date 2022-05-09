import Image from "next/image";
import { useRouter } from "next/router";

import ArrowDownIcon from "../../assets/down-arrow.svg";

import { ROUTES } from "../../data/routes";

export const NextPageButton = () => {
  const router = useRouter();

  const handleOnClick = () => {
    const currentUrl = router.pathname;
    const index = ROUTES.findIndex((route) => route === currentUrl);

    if (!index && index !== 0) {
      sendBackToHome();
      return;
    }

    const newRouteIndex = index + 1;
    if (newRouteIndex > ROUTES.length) {
      sendBackToHome();
      return;
    }

    const newRoute = ROUTES[newRouteIndex];
    if (!newRoute) {
      sendBackToHome();
      return;
    }
    router.push(newRoute);
  };

  const sendBackToHome = () => {
    router.push("/");
  };

  return (
    <button type="button" onClick={handleOnClick} className="next-page-btn">
      <Image
        src={ArrowDownIcon}
        height={30}
        width={30}
        alt="down-arrow"
        className="next-page-btn__icon"
      />
    </button>
  );
};
