import React, { useState } from "react"
import "./NoteForm.css"
import PropTypes from "prop-types"

function NoteForm({ onAddNote }) {
  const [contentInput, setContentInput] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddNote({ id: Math.random(), content: contentInput.value })
    contentInput.value = ""
  }

  return (
    <div className="NoteForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={setContentInput}
          className="note-input"
          placeholder="Write a new note here..."
        />
        <input type="submit" value="Submit" className="note-button" />
      </form>
    </div>
  )
}

NoteForm.propTypes = {
  onAddNote: PropTypes.func.isRequired,
}

export default NoteForm
