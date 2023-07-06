import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { StyledButton, StyledLi, StyledUl } from './ContactList.styled';

// const getFilteredContacts = contacts => {
// switch (contacts) {
//   case value:
//     break;

//   default:
//     break;
// }
// };

export const ContactList = ({ contact }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  // const visibleContacts = getFilteredContacts(contacts);

  const handleDelete = () => dispatch(deleteContact(contact.id));
  console.log(contact);

  return (
    <StyledUl>
      {contacts.map(item => (
        <StyledLi key={item.id}>
          {item.name}: {item.number}
          <StyledButton onClick={handleDelete}>Delete</StyledButton>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

// import PropTypes from 'prop-types';

// import { StyledButton, StyledLi, StyledUl } from './ContactList.styled';

// export const ContactList = ({ contacts = [], deleteContact }) => {
// return (
//   <StyledUl>
//     {contacts.map(item => (
//       <StyledLi key={item.id}>
//         {item.name}: {item.number}
//         <StyledButton onClick={() => deleteContact(item.id)}>
//           Delete
//         </StyledButton>
//       </StyledLi>
//     ))}
//   </StyledUl>
// );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
