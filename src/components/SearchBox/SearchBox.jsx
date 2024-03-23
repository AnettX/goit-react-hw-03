const SearchBox = ({ onChangeContact, filter }) => {
  return (
    <section>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChangeContact} value={filter} />
    </section>
  );
};

export default SearchBox;
