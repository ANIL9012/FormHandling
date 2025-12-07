import React from 'react'
import { useState } from 'react'

function WithoutUseMemo() {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    function expensCalculation () {
        console.log("Running expensive calculation...")
        let total = 0;
        for(let i = 0; i < 1000000000; i++){
            total += i;
        }
        return total
    }

    const result = expensCalculation()

  return (
    <div>
      <h2>Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Icrease count</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Count:{count}</p>
    </div>
  )
}

export default WithoutUseMemo
