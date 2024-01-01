import {  legacy_createStore as createStore } from 'redux';
import noteReducer from './reducers';


const loadNotesFromLocalStorage = () => {
  try {
    const serializedNotes = localStorage.getItem('notes');
    if (serializedNotes === null) {
      return undefined;
    }
    return JSON.parse(serializedNotes);
  } catch (error) {
    console.error('Error loading notes from local storage:', error);
    return undefined;
  }
};


const saveNotesToLocalStorage = (notes) => {
  try {
    const serializedNotes = JSON.stringify(notes);
    localStorage.setItem('notes', serializedNotes);
  } catch (error) {
    console.error('Error saving notes to local storage:', error);
  }
};

const initialState = {
  notes: loadNotesFromLocalStorage() || [],
};

const store = createStore(
  noteReducer,
  initialState,
);


store.subscribe(() => {
  const { notes } = store.getState();
  saveNotesToLocalStorage(notes);
});

export default store;
