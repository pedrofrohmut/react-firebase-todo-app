import React from "react"
import PropTypes from "prop-types"

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


ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired
}

export default ErrorMessage
