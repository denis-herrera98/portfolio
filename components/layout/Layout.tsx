import { useRouter } from "next/router";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { NextPageButton } from "../buttons/NextPageButton";

interface Props {
  children: JSX.Element | JSX.Element[];
}

let key = 0;
export const Layout = ({ children }: Props): JSX.Element => {
  const router = useRouter();
  key = key + 1;
  return (
    <>
      <NavBar />
      <div className="content">
        <SideBar />
        <main className="content__main">{children}</main>
      </div>
      <NextPageButton />
    </>
  );
};
