import { useRouter } from "next/router";
import { useCallback } from "react";
import { ROUTES } from "../data/routes";

export const useNextPage = () => {
  const router = useRouter();

  const showNextPage = useCallback(() => {
    const currentUrl = router.pathname;
    const index = ROUTES.findIndex((route) => route === currentUrl);
    if (!index && index !== 0) {
      return;
    }

    const newRouteIndex = index + 1;
    if (newRouteIndex > ROUTES.length) {
      return;
    }

    const newRoute = ROUTES[newRouteIndex];
    if (!newRoute) {
      return;
    }
    router.push(newRoute);
  }, [router]);

  const showPreviousPage = useCallback(() => {
    const currentUrl = router.pathname;
    const index = ROUTES.findIndex((route) => route === currentUrl);
    if (!index && index !== 0) {
      return;
    }

    const newRouteIndex = index - 1;
    if (newRouteIndex < 0) {
      return;
    }

    const newRoute = ROUTES[newRouteIndex];
    if (!newRoute) {
      return;
    }
    router.push(newRoute);
  }, [router]);

  return { showNextPage, showPreviousPage };
};
