import React, { useState } from "react"
import "./App.css"

import NoteList from "./components/NoteList/NoteList"
import NoteForm from "./components/NoteForm/NoteForm"

const App = () => {
  const [currentNote, setCurrentNote] = useState({
    id: "",
    content: ""
  })

  const [editNote, setEditNote] = useState("")

  const handleEdit = note => {
    setCurrentNote(note)
    setEditNote(note.content)
  }

  return (
    <div className="App">
      <div className="notes-wrapper">
        <header className="notes-header">
          <h1>React & Firebase To-Do List</h1>
        </header>

        <main className="notes-body">
          <NoteList onEdit={handleEdit} />
        </main>

        <footer className="notes-footer">
          <NoteForm
            editNote={editNote}
            setEditNote={setEditNote}
            currentNote={currentNote}
            setCurrentNote={setCurrentNote}
          />
        </footer>
      </div>
    </div>
  )
}

export default App
