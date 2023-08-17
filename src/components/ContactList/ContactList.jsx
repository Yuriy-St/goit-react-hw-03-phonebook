import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';

export default function ContactList({ contacts, filter = '', onDelete }) {
  const filterNormalized = filter.toLowerCase();
  const selected = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterNormalized)
      )
    : contacts;

  return (
    <ContactListStyled>
      {selected.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)}
        />
      ))}
    </ContactListStyled>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
