interface Props {
  title: string;
  description: string;
}

export const Section = ({ title, description }: Props) => {
  return (
    <section className="section">
      <header>
        <h2 className="section__title">{title}</h2>
      </header>
      <main>
        <p className="section__description">{description}</p>
      </main>
    </section>
  );
};
