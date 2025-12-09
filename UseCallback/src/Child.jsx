import React from 'react'

function Child({handleClick}) {
    console.log("Child Re'render")
  return (
    <>
    <button onClick={handleClick}>Child Button</button>
    </>
  )
}

export default React.memo(Child)
