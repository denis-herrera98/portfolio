interface Props {
  title: string;
  subtitle?: string;
  description: string;
}

export const Section = ({ title, subtitle, description }: Props) => {
  return (
    <section className="section">
      <h1 className="section__title">{title}</h1>
      {subtitle && <h2 className="section__subtitle">{subtitle}</h2>}
      <p className="section__description">{description}</p>
    </section>
  );
};
