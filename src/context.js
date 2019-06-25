import React from "react"
import PropTypes from "prop-types"
import firebase from "firebase/app"
import { firebaseConfig } from "./config/config"

// Initialize Cloud Firestore.
firebase.initializeApp(firebaseConfig)

const Context = React.createContext()

const ContextProvider = ({ children }) => (
  <Context.Provider value={firebase}>{children}</Context.Provider>
)

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { Context, ContextProvider }
