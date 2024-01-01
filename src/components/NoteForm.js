import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      body,
    };
    dispatch(addNote(newNote));
    setTitle('');
    setBody('');
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 mb-10 max-w-md w-full rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add a New Note</h2>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 mt-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Body:
          <ReactQuill
            theme="snow"
            value={body}
            onChange={(value) => setBody(value)}
            style={{ height: '140px' }}
            className="quill-editor"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 mt-12 text-white font-bold py-2 px-4 rounded-md  transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
