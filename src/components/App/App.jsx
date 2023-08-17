import { Component } from 'react';
import { Container, Title } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import { Subtitle } from 'components/Subtitle/Subtitle.styled';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
