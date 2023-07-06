// import { useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
// import { getContacts } from 'redux/selectors';
import { Filter } from './Filter/Filter';
import { AppContainer } from './App.styled';

export const App = () => {
  // const contacts = useSelector(getContacts);

  //в компонент ContactList передаём пользователей для отрисовки (после фильтрации)
  // const getFilteredData = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  //   );
  // };

  //удаляем контакт по id
  // const handleDelete = id => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
