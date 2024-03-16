import { useSearchParams } from "react-router-dom";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
