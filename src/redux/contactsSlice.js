import { createSlice } from '@reduxjs/toolkit';

const initialState = {
contacts: [],
filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const existingContact = state.contacts.find(contact => contact.name === action.payload.name);
      if (existingContact) {
        alert(`Contact with name ${action.payload.name} already exists`);
      } else {
        state.contacts.push(action.payload);
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