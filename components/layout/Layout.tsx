import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <NavBar />
      <div className="content">
        <SideBar />
        {children}
      </div>
    </>
  );
};
