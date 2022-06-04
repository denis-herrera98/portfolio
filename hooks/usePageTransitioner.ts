import { useEffect, useCallback, useContext, useState } from "react";
import { AnimationControllersContext } from "../context/animation-controllers-context";
import { useNextPage } from "../hooks/useNextPage";

type ScrollChangeDirection = "UP" | "DOWN";
interface IHandleRouteChangeProps {
  scrollDirection?: ScrollChangeDirection;
  directPath?: string;
}

export const usePageTransitioner = () => {
  const { showNextPage, showPreviousPage, showSpecificRoute } = useNextPage();
  const { controlsSquare, controlsBalls } = useContext(
    AnimationControllersContext
  );

  const [isSwitchComplete, setIsSwitchComplete] = useState<boolean>(true);

  const handleRouteChange = useCallback(
    async ({ scrollDirection, directPath }: IHandleRouteChangeProps) => {
      if (!controlsSquare || !controlsBalls || !isSwitchComplete) return;
      setIsSwitchComplete(false);

      await controlsSquare.start("initial");
      await controlsBalls.start("initial");

      controlsSquare.start("entering");
      await controlsBalls.start("pulsing");

      await controlsSquare.start("splitten");
      await controlsBalls.start("middle");

      if (directPath) {
        showSpecificRoute(directPath);
      }

      if (scrollDirection) {
        if (scrollDirection === "DOWN") {
          showNextPage();
        } else {
          showPreviousPage();
        }
      }

      await controlsBalls.start("splitten");
      await controlsSquare.start("exiting");

      controlsBalls.start("completed");
      controlsSquare.start("completed");

      setIsSwitchComplete(true);
    },
    [
      showSpecificRoute,
      showNextPage,
      showPreviousPage,
      controlsSquare,
      controlsBalls,
      setIsSwitchComplete,
      isSwitchComplete,
    ]
  );

  const handleScrollChange = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0) {
        handleRouteChange({ scrollDirection: "DOWN" });
      } else {
        handleRouteChange({ scrollDirection: "UP" });
      }
    },
    [handleRouteChange]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScrollChange);

    return () => {
      window.removeEventListener("wheel", handleScrollChange);
    };
  }, [handleScrollChange]);

  return {
    controlsSquare,
    controlsBalls,
    handleRouteChange,
  };
};
