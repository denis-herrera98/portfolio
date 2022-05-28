import { useState, createContext } from "react";
import { SpringHelperConfig } from "react-motion";

export interface IMotionConfig {
  config: SpringHelperConfig;
  setProp: (prop: IMotionConfig["config"]) => void;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialContext: IMotionConfig = {
  config: {},
  setProp: (config: {}) => {},
};

const MotionConfig = createContext<IMotionConfig>(initialContext);

export const MotionConfigProvider = ({ children }: Props) => {
  const [config, setConfig] = useState<IMotionConfig["config"]>({
    stiffness: 470,
    damping: 25,
  });

  const setProp: IMotionConfig["setProp"] = (prop) => {
    setConfig({ ...config, ...prop });
  };

  return (
    <MotionConfig.Provider
      value={{
        config,
        setProp,
      }}
    >
      {children}
    </MotionConfig.Provider>
  );
};

// export const useMotionConfig = MotionConfig;
