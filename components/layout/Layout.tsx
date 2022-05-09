import React from "react";
import { NextPageButton } from "../buttons/NextPageButton";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
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
