import { useRouter } from "next/router";

interface Props {
  path: string;
}

export const PageIndicator = ({ path }: Props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(path);
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={
        path === router.pathname
          ? "page-indicator page-indicator__active"
          : "page-indicator"
      }
    />
  );
};
