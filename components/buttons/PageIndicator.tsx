import { useRouter } from "next/router";

interface Props {
  path: string;
}

export const PageIndicator = ({ path }: Props) => {
  const router = useRouter();

  return (
    <div
      className={
        path === router.pathname
          ? "page-indicator page-indicator__active"
          : "page-indicator"
      }
    />
  );
};
