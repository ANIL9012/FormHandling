import React, { useReducer } from 'react'

function Test() {
    const [checked, toggleche] = useReducer((checked) => !checked, false);
  return (
    <div>
      <input type="checkbox" checked = {checked} onChange={toggleche} />
      {checked ? "checked" : "Not Checked"}
    </div>
  )
}

export default Test
