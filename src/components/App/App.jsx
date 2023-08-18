import { Component } from 'react';
import { Container, Title } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import { Subtitle } from 'components/Subtitle/Subtitle.styled';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsLS = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLS) this.setState({ contacts: contactsLS });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  isValidContact = name => {
    const isSameContact = this.state.contacts.some(
      contact => contact.name === name
    );
    console.log(isSameContact);
    if (isSameContact) {
      alert(`${name} is already in contacts!`);
      return false;
    }

    return true;
  };

  handleSubmit = contact => {
    if (!this.isValidContact(contact.name)) return;
    this.setState({ name: contact.name });
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <div>
          <Title>Phonebook</Title>
          <ContactForm handleSubmit={this.handleSubmit}></ContactForm>
        </div>

        <div>
          <Subtitle>Contacts</Subtitle>
          <Filter value={filter} onChange={this.handleFilterChange} />
          {contacts.length ? (
            <ContactList
              contacts={contacts}
              filter={filter}
              onDelete={this.handleDeleteContact}
            />
          ) : null}
        </div>
      </Container>
    );
  }
}
