import { AnimationControls, useAnimation } from "framer-motion";
import { createContext } from "react";

interface Props {
  children: (args: IAnimationControllersContext) => JSX.Element | JSX.Element[];
}

export interface IAnimationControllersContext {
  controlsBalls?: AnimationControls;
  controlsSquare?: AnimationControls;
}

export const AnimationControllersContext =
  createContext<IAnimationControllersContext>(
    {} as IAnimationControllersContext
  );

export const AnimationControllersProvider = ({ children }: Props) => {
  const controlsSquare = useAnimation();
  const controlsBalls = useAnimation();

  return (
    <AnimationControllersContext.Provider
      value={{
        controlsBalls,
        controlsSquare,
      }}
    >
      {children({
        controlsBalls,
        controlsSquare,
      })}
    </AnimationControllersContext.Provider>
  );
};
