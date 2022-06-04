import { useRouter } from "next/router";
import { pressVariants, strokeVariants } from "../../configs/framer-motion";

interface Props {
  path: string;
  handleRouteChange: ({ directPath }: { directPath: string }) => void;
}

export const PageIndicator = ({ path, handleRouteChange }: Props) => {
  const router = useRouter();

  const isActive = path === router.pathname;

  const handleOnClick = () => {
    handleRouteChange({ directPath: path });
  };

  return (
    <button type="button" onClick={handleOnClick}>
      <div
        className={
          isActive ? "page-indicator page-indicator__active" : "page-indicator"
        }
      />
    </button>
  );
};
