import React from "react"

const ErrorMessage = ({ text }) => {
  return (
    <div
      className="ErrorMessage"
      style={{
        color: "white",
        fontSize: "2rem"
      }}
    >
      {text}
    </div>
  )
}

export default ErrorMessage
