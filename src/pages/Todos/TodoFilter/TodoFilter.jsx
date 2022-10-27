import PropTypes from 'prop-types';
import { FilterLabel } from './TodoFilter.styled';

export const Filter = ({ value, changeFilter }) => {
  return (
    <FilterLabel>
      Filer by name
      <input type="text" value={value} onChange={changeFilter} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
