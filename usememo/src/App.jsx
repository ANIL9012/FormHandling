import React from 'react'
import WithoutUseMemo from './WithoutUseMemo'
import WithUseMemo from './WithUseMemo'

function App() {
  return (
    <div>
      <WithUseMemo />
      {/* <WithoutUseMemo /> */}
    </div>
  )
}

export default App
