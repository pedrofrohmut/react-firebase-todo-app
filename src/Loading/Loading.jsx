import React from "react"

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

export default Loading
