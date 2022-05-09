import Image from "next/image";

interface Props {
  name: string;
  icon: string;
  height: number;
  width: number;
}

export const SocialNetwork = ({ name, icon, height, width }: Props) => {
  return (
    <div className="social-network">
      <Image
        src={icon}
        height={height}
        width={width}
        alt="social-network"
        className="social-network__icon"
      />
      <p className="social-network__name">{name}</p>
    </div>
  );
};
