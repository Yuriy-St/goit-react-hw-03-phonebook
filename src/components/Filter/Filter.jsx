import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';

export default function Filter({ value, onChange }) {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <FilterStyled>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange} />
    </FilterStyled>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
