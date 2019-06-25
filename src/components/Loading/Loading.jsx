import React from "react"
import PropTypes from "prop-types"

const Loading = ({ text }) => {
  return (
    <div
      className="Loading"
      style={{
        color: "white",
        fontSize: "2rem"
      }}
    >
      {text}
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

export default Loading
