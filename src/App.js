import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  return (
    <Provider store={store}>
      <div className="App min-h-screen flex flex-col p-8 bg-blue-100">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Notes Taking App</h1>
        <div className="">
          <NoteForm />
          <NoteList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
