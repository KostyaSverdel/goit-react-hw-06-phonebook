import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from '../ContactList/ContactList.module.css';

function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleDeleteContact = contact => {
    dispatch(deleteContact(contact));
  };

  return (
    <ul className={css.ContactListConteiner}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => handleDeleteContact({ id, name, number })}
        />
      ))}
    </ul>
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
};

export default ContactList;
