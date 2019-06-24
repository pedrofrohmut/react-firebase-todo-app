import React from "react"
import "./App.css"

import NoteList from "./NoteList/NoteList"
import NoteForm from "./NoteForm/NoteForm"

const App = () => (
  <div className="App">
    <div className="notes-wrapper">
      <header className="notes-header">
        <h1>React & Firebase To-Do List</h1>
      </header>

      <main className="notes-body">
        <NoteList />
      </main>

      <footer className="notes-footer">
        <NoteForm />
      </footer>
    </div>
  </div>
)

export default App
