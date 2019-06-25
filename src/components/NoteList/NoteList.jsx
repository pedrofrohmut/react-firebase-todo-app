import React, { useContext } from "react"
import PropTypes from "prop-types"

import { useCollection } from "react-firebase-hooks/firestore"
import { Context } from "../../context"
import "firebase/firestore"

import Note from "../Note/Note"
import Loading from "../Loading/Loading"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

const NoteList = ({ onEdit }) => {
  const firebase = useContext(Context)

  const query = firebase.firestore().collection("notes")
  const options = { snapshotListenOptions: { includeMetadataChanges: true } }

  // Firebase Hook
  const [snapshot, firebaseIsLoading, error] = useCollection(query, options)

  return (
    <div className="NoteList">
      {error && <ErrorMessage text="Could not query Firebase for Notes" />}

      {firebaseIsLoading && <Loading text="loading..." />}

      {snapshot && (
        <>
          {snapshot.docs.map(doc => {
            const note = { id: doc.id, content: doc.data().content }
            return <Note key={doc.id} note={note} onEdit={onEdit} />
          })}
        </>
      )}
    </div>
  )
}

NoteList.propTypes = {
  onEdit: PropTypes.func.isRequired
}

export default NoteList
