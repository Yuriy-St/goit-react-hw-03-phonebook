import PropTypes from 'prop-types';
import { DeleteBtn, StyledContact } from './Contact.styled';

export default function Contact({ name, number, onDelete }) {
  return (
    <StyledContact>
      <div>{name}:</div>
      <div>{number}</div>
      <DeleteBtn type="button" onClick={onDelete}>
        Delete
      </DeleteBtn>
    </StyledContact>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
