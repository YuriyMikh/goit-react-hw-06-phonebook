import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts', //имя слайса
  initialState: contactsInitialState, //начальное состояние редюсера слайса (ссылка)
  //объект редюсеров
  reducers: {
    //первый редюсер
    addContact: {
      //действия, которые бдут происходить в редюсере
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      //будет подготавливать данные для записи
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    //второй редюсер
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions; //генераторы экшенов
export const contactsReducer = contactsSlice.reducer; //редюсер слайса
