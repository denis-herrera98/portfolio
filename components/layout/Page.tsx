
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Page = ({ children }: Props) => {
  return (
    <div className="page">
      <h1 className="page__title"> About myself </h1>
      <div className="page__body">
        {children}
      </div>
    </div>
  );
};

