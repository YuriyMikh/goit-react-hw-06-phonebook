import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilteredData } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { StyledDeleteButton, StyledLi, StyledUl } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch(); //получаем ссылку на функцию отправки экшенов

  const contacts = useSelector(selectContacts); //из файла contactsSlice.js (состояния Redux) получаем значение из state.contacts
  const visibleContacts = useSelector(selectFilteredData); //из файла contactsSlice.js (состояния Redux) получаем значение из state.filter.value

  //функция отрисовки контактов (после фильтрации)
  const getFilterContacts = () => {
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(visibleContacts.toLowerCase())
    );
  };

  const handleDelete = id => dispatch(deleteContact(id)); //отправляем результат - экшен для удаления

  const filterContacts = getFilterContacts(); //в переменную записыаем вызов функции

  return (
    <StyledUl>
      {filterContacts.map(item => (
        <StyledLi key={item.id}>
          {item.name}: {item.number}
          <StyledDeleteButton onClick={() => handleDelete(item.id)}>
            Delete
          </StyledDeleteButton>
        </StyledLi>
      ))}
    </StyledUl>
  );
};