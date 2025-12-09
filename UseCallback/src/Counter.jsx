import React, { useCallback, useState } from 'react'

function Counter() {
    const [count, seetCount] = useState(0);

    const increment = useCallback(() => {
        seetCount((prev) => prev + 1)
    }, [])
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
    </>
  )
}

export default Counter
