import React, { useState, useEffect } from "react"
import "./App.css"

import firebase from "firebase/app"
import "firebase/firestore"
import { firebaseConfig } from "./config/config"

import Note from "./Note/Note"
import NoteForm from "./NoteForm/NoteForm"

// Initialize Cloud Firestore.
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

function App() {
  const [notes, setNotes] = useState([])

  const handleAddNote = content => {
    ;(async () => {
      db.collection("notes").add({ content })
    })()
  }

  const queryNotes = async () => {
    const querySnapshot = await db.collection("notes").get()

    const newNotes = querySnapshot.docs.reduce((acc, doc) => {
      const newNote = { id: doc.id, content: doc.data().content }
      return acc.concat(newNote)
    }, [])

    setNotes(newNotes)
  }

  useEffect(() => {
    queryNotes()
  }, [])

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
            <Note
              note={{ id: "", content: "No notes to display at the moment." }}
            />
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
