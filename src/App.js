import React, { useState } from "react"
import "./App.css"
import Note from "./Note/Note"
import NoteForm from "./NoteForm/NoteForm"

const INITIAL_NOTES = [
  { id: 1, content: "Note content One" },
  { id: 2, content: "Note content Two" },
  { id: 3, content: "Note content Three" },
  { id: 4, content: "Note content Four" },
]

function App() {
  // eslint-disable-next-line no-unused-vars
  const [notes, setNotes] = useState(INITIAL_NOTES)

  const handleAddNote = newNote => setNotes([...notes, newNote])

  return (
    <div className="App">
      <div className="notes-wrapper">
        <header className="notes-header">
          <h1>React & Firebase To-Do List</h1>
        </header>

        <main className="notes-body">
          {notes.length > 0 ? (
            <>
              {notes.map(note => (
                <Note note={note} key={note.id} />
              ))}
            </>
          ) : (
            <p>No Notes to display at the moment.</p>
          )}
        </main>

        <footer className="notes-footer">
          <NoteForm onAddNote={handleAddNote} />
        </footer>
      </div>
    </div>
  )
}

export default App
