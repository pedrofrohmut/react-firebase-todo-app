import React from "react"
import "./Note.css"
import PropTypes from "prop-types"

function Note({ note }) {
  const { id, content } = note
  return (
    <div className="Note fade-in" id={id}>
      {content}
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}

export default Note
