import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.section}>
      <div className={css.background}>
        <h1 className={css.title}>Welcome!</h1>
        <p className={css.article}>
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
      </div>
    </section>
  );
};

export default Hero;
