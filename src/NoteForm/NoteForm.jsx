import React from "react"
import "./NoteForm.css"
import PropTypes from "prop-types"

function NoteForm({ onAddNote }) {
  let contentInput = React.createRef()

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   onAddNote({ id: Math.random(), content: contentInput.value })
  //   contentInput.value = ""
  // }

  return (
    <div className="NoteForm">
      <form
        onSubmit={e => {
          e.preventDefault()
          const newNote = { id: Math.random, content: contentInput.value }
          onAddNote(newNote)
          contentInput.value = ""
        }}
      >
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

NoteForm.propTypes = {
  onAddNote: PropTypes.func.isRequired
}

export default NoteForm
