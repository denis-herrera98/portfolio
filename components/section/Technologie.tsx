import Image from "next/image";

interface Props {
  name: string;
  icon: string;
  height: number;
  width: number;
}

export const Technologies = ({ name, icon, height, width }: Props) => {
  return (
    <div className="technology">
      <span>
        <Image src={icon} height={height} width={width} alt="technologie" />
      </span>
      <p>{name}</p>
    </div>
  );
};
