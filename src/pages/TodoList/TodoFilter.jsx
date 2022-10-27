import PropTypes from 'prop-types';

export const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Filer by name
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
