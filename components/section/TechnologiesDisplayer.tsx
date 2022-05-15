interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const TechnologiesDisplayer = ({ children }: Props) => {
  return (
    <section className="technologies">
      <h2 className="technologies__title"> Technology Stack </h2>
      <div className="technologies__grid">{children}</div>
    </section>
  );
};
