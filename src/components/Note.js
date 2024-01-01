import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faEye,
  faExclamationTriangle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import NoteModal from './NoteModal';

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(note.body);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNoteModalOpen, setNoteModalOpen] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    dispatch(editNote(note.id, { ...note, body: updatedText }));
    setEditing(false);
  };

  const handleDelete = () => {
    setModalOpen(true);
  };

  const handleNoteCloseModal = () => {
    setNoteModalOpen(false);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteNote(note.id));
    setModalOpen(false);
  };

  const handleViewFullNote = () => {
    setNoteModalOpen(true);
  };

  return (
    <div className="mb-4 border border-gray-300 rounded-md p-6 bg-white w-full  mx-auto">
      {isEditing ? (
        <div className="flex flex-col space-y-4">
          <textarea
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="p-2 border border-gray-300 rounded-md h-32 resize-none"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: note.body }}></p>
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <button
                onClick={handleEdit}
                className="text-blue-500 hover:underline"
              >
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDelete}
                className="text-red-500 hover:underline"
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
              <button
                onClick={handleViewFullNote}
                className="text-green-500 hover:underline"
              >
                <FontAwesomeIcon icon={faEye} /> View Full
              </button>
            </div>
          </div>
        </>
      )}
      {isNoteModalOpen && <NoteModal note={note} onClose={handleNoteCloseModal} />}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Confirmation</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <p className="text-red-500 mb-4">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="mr-2 text-red-500"
              />
              Are you sure you want to delete this note?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleConfirmDelete}
                className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
