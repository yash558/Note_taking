import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NoteModal = ({ note, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md md:max-w-md w-[80%]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-3xl font-bold text-blue-500">{note.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: note.body }}></p>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NoteModal;
