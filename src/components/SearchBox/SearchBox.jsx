import { useSearchParams } from "react-router-dom";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.search.value.trim();

    if (value === "") return;

    setSearchParams({ query: value });

    form.reset();
  };

  return (
    <section className={css.section}>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="search"
              className={css.input}
              placeholder="Search for movie..."
            />
            <button type="submit" className={css.submitBtn}>
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBox;
