import css from "./SearchBox.module.css";

const SearchBox = ({ onChangeContact, filter }) => {
  return (
    <section className={css.sectionSearchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={onChangeContact}
        value={filter}
        className={css.inputForSearch}
      />
    </section>
  );
};

export default SearchBox;
