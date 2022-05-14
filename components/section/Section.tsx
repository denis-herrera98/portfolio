interface Props {
  title: string;
  subtitle?: string;
  description: string;
}

export const Section = ({ title, subtitle, description }: Props) => {
  return (
    <section className="section">
      <header>
        <h1 className="section__title">{title}</h1>
      </header>
      <main>
        {subtitle && <h2 className="section__subtitle">{subtitle}</h2>}
        <p className="section__description">{description}</p>
      </main>
    </section>
  );
};
