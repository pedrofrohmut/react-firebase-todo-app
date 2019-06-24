import React, { useContext } from "react"
import "./NoteForm.css"

import "firebase/firestore"
import { Context } from "../context"

function NoteForm() {
  const firebase = useContext(Context)

  let contentInput = React.createRef()

  const addNote = content => {
    console.log("Add Note:", content)
    ;(async () => {
      const db = firebase.firestore()
      db.collection("notes").add({ content })
    })()
  }

  const handleSubmit = e => {
    e.preventDefault()
    addNote(contentInput.value)
    contentInput.value = ""
  }

  return (
    <div className="NoteForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={node => {
            contentInput = node
          }}
          className="note-input"
          placeholder="Write a new note here..."
        />
        <input type="submit" value="Submit" className="note-button" />
      </form>
    </div>
  )
}

export default NoteForm
