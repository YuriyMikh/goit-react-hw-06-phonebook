import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target; //деструктуризация по наименованию свойства name тэга input
    //через switch записываем результаты в setName и setNumber
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));
    // onSubmit(name, number); //в файл App.jsx передаем пропсом данные после сабмита
    reset(); //очищаем инпуты
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+((?:'[a-zA-Zа-яА-Я\s])?(?:-[a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я\s]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>

      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}[\s]?[\-]?\(?\d{1,3}?\)?[\s]?[\-]?\d{1,4}[\s]?[\-]?\d{1,4}[\s]?[\-]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
