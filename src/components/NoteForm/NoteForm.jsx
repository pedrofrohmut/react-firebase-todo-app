import React, { useContext } from "react"
import "./NoteForm.css"
import PropTypes from "prop-types"

import "firebase/firestore"
import { Context } from "../../context"

function NoteForm({ currentNote, setCurrentNote, editNote, setEditNote }) {
  const firebase = useContext(Context)

  const addNoteToFirebase = ({ content }) => {
    ;(async () => {
      const db = firebase.firestore()
      db.collection("notes").add({ content })
    })()
  }

  const editNoteOnFirebase = ({ id, content }) => {
    ;(async () => {
      firebase
        .firestore()
        .collection("notes")
        .doc(id)
        .set({ content })
    })()
  }

  const resetCurrentNote = () => {
    setCurrentNote({ id: "", content: "" })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (editNote === "") return false

    if (currentNote.id !== "") {
      editNoteOnFirebase({ id: currentNote.id, content: editNote })
    } else {
      addNoteToFirebase({ content: editNote })
    }

    resetCurrentNote()
    setEditNote("")

    return true
  }

  const handleCancelUpdate = () => {
    resetCurrentNote()
    setEditNote("")
  }

  const submitText = currentNote.id === "" ? "Add" : "Update"

  return (
    <div className="NoteForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="note-input"
          placeholder="Write a new note here..."
          value={editNote}
          onChange={e => setEditNote(e.target.value)}
        />
        <input type="submit" value={submitText} className="note-button" />
        {currentNote.id !== "" && (
          <button
            onClick={handleCancelUpdate}
            type="button"
            className="cancel-button"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  )
}

NoteForm.propTypes = {
  currentNote: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string
  }),
  setCurrentNote: PropTypes.func.isRequired,
  editNote: PropTypes.string.isRequired,
  setEditNote: PropTypes.func.isRequired
}

NoteForm.defaultProps = {
  currentNote: null
}

export default NoteForm
