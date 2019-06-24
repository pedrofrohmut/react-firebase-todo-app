import React from "react"
import firebase from "firebase/app"
import { firebaseConfig } from "./config/config"

// Initialize Cloud Firestore.
firebase.initializeApp(firebaseConfig)

const Context = React.createContext()

const ContextProvider = props => (
  <Context.Provider value={firebase}>{props.children}</Context.Provider>
)

const ContextConsumer = Context.Consumer

export { Context, ContextProvider }
