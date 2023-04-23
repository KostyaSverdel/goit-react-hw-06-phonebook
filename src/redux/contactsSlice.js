import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
contacts: [],
filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      if (!name || !number) {
        alert('Please provide both name and number');
        return;
      }
      const isNameExist = state.contacts.find(contact => contact.name === name);
      const isNumberExist = state.contacts.find(contact => contact.number === number);
      if (isNameExist) {
        alert(`${name} is already in contacts!`);
      } else if (isNumberExist) {
        alert(`${number} is already in contacts!`);
      } else {
        const id = uuidv4();
        state.contacts.push({ id, name, number });
      }
    },
    
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});



export const { addContact, deleteContact, updateFilter } = contactSlice.actions;

export default contactSlice;