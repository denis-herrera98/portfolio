import { useRouter } from "next/router";
import { useCallback } from "react";
import { ROUTES } from "../data/routes";

const findIndex = (path: string) => ROUTES.findIndex((route) => route === path);

export const useNextPage = () => {
  const router = useRouter();

  const showNextPage = useCallback(() => {
    const currentUrl = router.pathname;
    const index = findIndex(currentUrl);

    const newRouteIndex = index + 1;
    if (newRouteIndex === ROUTES.length) {
      router.push(ROUTES[0]);
    }

    const newRoute = ROUTES[newRouteIndex];
    if (!newRoute) {
      return;
    }
    router.push(newRoute);
  }, [router]);

  const showPreviousPage = useCallback(() => {
    const currentUrl = router.pathname;
    const index = findIndex(currentUrl);
    if (index === 0) {
      router.push(ROUTES[ROUTES.length - 1]);
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

  const showSpecificRoute = useCallback(
    (newPath: string) => {
      router.push(newPath);
    },
    [router]
  );

  return { showNextPage, showPreviousPage, showSpecificRoute };
};
