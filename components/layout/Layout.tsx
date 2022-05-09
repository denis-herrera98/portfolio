import { NextPageButton } from "../buttons/NextPageButton";
import { CSSTransition } from "react-transition-group";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

let key = 0;
export const Layout = ({ children }: Props) => {
  key++;
  return (
    <>
      <NavBar />
      <div className="content">
        <SideBar />
        <ChildrenWithTransition key={key}>
          <main className="content__main">{children}</main>
        </ChildrenWithTransition>
      </div>
      <NextPageButton />
    </>
  );
};

interface TransitionProps {
  children: JSX.Element | JSX.Element[];
}

function ChildrenWithTransition({ children }: TransitionProps) {
  const [inProp, setInProp] = useState(false);
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log("SE MONTO");
    setInProp(true);

    return () => {
      console.log("SE DESPICHO");
      setInProp(false);
    };
  }, []);

  return (
    <CSSTransition in={inProp} timeout={200} classNames="content__main">
      {children}
    </CSSTransition>
  );
}
