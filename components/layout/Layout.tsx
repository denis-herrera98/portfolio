import {
  Transition,
  TransitionGroup,
  TransitionStatus,
} from "react-transition-group";
import { useRouter } from "next/router";

import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { NextPageButton } from "../buttons/NextPageButton";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <div className="content">
        <SideBar />
        <TransitionGroup>
          <Transition
            key={router.pathname}
            timeout={1000}
            mountOnEnter={true}
            unmountOnExit={true}
            appear={true}
          >
            {(status) => (
              <ChildrenWithTransition status={status}>
                {children}
              </ChildrenWithTransition>
            )}
          </Transition>
        </TransitionGroup>
      </div>
      <NextPageButton />
    </>
  );
};

const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: "translateY(-100%)",
};

interface TransitionStyles {
  [index: string]: React.CSSProperties;
}

const transitionStyles: TransitionStyles = {
  entering: { transform: "translateY(-100%)" },
  entered: { transform: "translateY(0%)" },
  exiting: { transform: "translateY(0%)" },
  exited: { transform: "translateY(100%)" },
};

interface ChildrenWithTransitionProps {
  children: JSX.Element | JSX.Element[];
  status: TransitionStatus;
}

function ChildrenWithTransition({
  children,
  status,
}: ChildrenWithTransitionProps) {
  return (
    <main
      className="content__main"
      style={{ ...defaultStyle, ...transitionStyles[status] }}
    >
      {children}
    </main>
  );
}
