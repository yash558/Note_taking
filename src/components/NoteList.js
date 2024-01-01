import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

const NoteList = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      {notes.length === 0 ? (
        <p className="text-gray-600">No notes available. Add some notes!</p>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-4 gap-8">
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
