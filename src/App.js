import { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main';
import SideBar from './Components/SideBar';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);

  const onAddNote = () =>{
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    };
    
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNoteArray = notes.map((note)=> {
      if(note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNoteArray);
  }
  
  const onDeleteNote = (idToDelete) => {
    if (window.confirm('Are you sure to delet this note?')) {
      setNotes(notes.filter((note) => note.id !== idToDelete));
    }
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  
  return (
    <div className="App">
      <SideBar 
        notes={notes} 
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main 
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
