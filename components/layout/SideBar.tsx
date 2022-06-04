import { GithubIcon, LinkedIn } from "../assets/svgs";

import { SocialNetwork } from "../buttons/SocialNetwork";
import { PageIndicator } from "../buttons/PageIndicator";
import { ROUTES } from "../../data/routes";

import { usePageTransitioner } from "../../hooks/usePageTransitioner";

export const SideBar = () => {
  const { handleRouteChange } = usePageTransitioner();

  return (
    <div className="sidebar">
      <div className="page-indicators">
        {ROUTES.map((path) => (
          <PageIndicator
            key={path}
            path={path}
            handleRouteChange={handleRouteChange}
          />
        ))}
      </div>
      <div className="social-links">
        <SocialNetwork name="LinkedIn" icon={LinkedIn} height={30} width={30} />
        <SocialNetwork name="Github" icon={GithubIcon} height={30} width={30} />
      </div>
    </div>
  );
};
