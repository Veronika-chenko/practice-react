export const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Filer by name
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};
