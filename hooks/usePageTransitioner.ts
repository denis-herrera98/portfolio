import { useEffect, useCallback } from "react";
import { useAnimation } from "framer-motion";
import { useNextPage } from "../hooks/useNextPage";

export const usePageTransitioner = () => {
  const { showNextPage, showPreviousPage } = useNextPage();
  const controlsSquare = useAnimation();
  const controlsBalls = useAnimation();

  const handleScroll = useCallback(
    async (e: WheelEvent) => {
      const handleRouteChange = async () => {
        await controlsSquare.start("initial");
        await controlsBalls.start("initial");

        controlsSquare.start("entering");
        await controlsBalls.start("pulsing");

        await controlsSquare.start("splitten");
        await controlsBalls.start("middle");
        // DOWN
        if (e.deltaY > 0) {
          showNextPage();
        } else {
          // UP
          showPreviousPage();
        }
        await controlsBalls.start("splitten");

        await controlsSquare.start("exiting");

        controlsBalls.start("completed");
        controlsSquare.start("completed");
      };

      await handleRouteChange();
    },
    [showNextPage, showPreviousPage, controlsSquare, controlsBalls]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return {
    controlsSquare,
    controlsBalls,
  };
};
