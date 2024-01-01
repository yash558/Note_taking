export const addNote = (note) => ({
    type: 'ADD_NOTE',
    payload: note,
  });
  
  export const editNote = (id, updatedNote) => ({
    type: 'EDIT_NOTE',
    payload: { id, updatedNote },
  });
  
  export const deleteNote = (id) => ({
    type: 'DELETE_NOTE',
    payload: id,
  });
  