// TODO: implement Delete and Edit functionality (useContext to access firebase).
import React, { useContext, useState } from "react"
import "./Note.css"
import PropTypes from "prop-types"

import { Context } from "../../context"
import "firebase/firestore"

function Note({ note, onEdit }) {
  const firebase = useContext(Context)

  const { id, content } = note

  const handleDelete = () => {
    ;(async () => {
      try {
        await firebase
          .firestore()
          .collection("notes")
          .doc(id)
          .delete()
        console.log("Document successfully deleted")
      } catch (err) {
        console.error("Error to delete", err)
      }
    })()
  }

  // const handleEdit = () => {}

  return (
    <div className="Note fade-in" id={id}>
      <span className="content">{content}</span>
      <div className="buttons">
        <button type="button" onClick={() => onEdit(note)} className="edit-btn">
          Edit
        </button>
        <button type="button" onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired,
  onEdit: PropTypes.func.isRequired
}

export default Note
