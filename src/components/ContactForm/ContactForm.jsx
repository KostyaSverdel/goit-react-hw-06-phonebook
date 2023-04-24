import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from '../ContactForm/ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isNameExist = contacts.find(contact => contact.name === name);
    const isNumberExist = contacts.find(contact => contact.number === number);

    if (!name || !number) {
      alert('Please provide both name and number');
      return;
    }
    if (isNameExist) {
      alert(`${name} is already in contacts!`);
      return;
    }
    if (isNumberExist) {
      alert(`${number} is already in contacts!`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.phoneForm} onSubmit={handleSubmit}>
      <label className={css.labelsPhone}>
        Name
        <input
          className={css.inputsForm}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className={css.labelsPhone}>
        Phone Number
        <input
          className={css.inputsForm}
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={css.buttonForm} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
