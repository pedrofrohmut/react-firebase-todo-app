// TODO: implement Delete and Edit functionality (useContext to access firebase).
import React from "react"
import "./Note.css"
import PropTypes from "prop-types"

function Note({ note }) {
  const { id, content } = note

  return (
    <div className="Note fade-in" id={id}>
      <span className="content">{content}</span>
      <div className="buttons">
        <span className="edit-btn">Edit</span>
        <span className="delete-btn">Delete</span>
      </div>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
}

export default Note
