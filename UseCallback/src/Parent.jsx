import React, { useCallback, useState } from 'react'
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        // setCount((prev) => prev + 1)
        console.log("Button Clicked")
    }, [])
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Parent Button</button>

      <Child handleClick={handleClick} />
    </>
  )
}

export default Parent
