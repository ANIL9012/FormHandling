import React, { useReducer } from 'react'

function Counter() {

  const reducer = (state, action) => {
    switch(action.type){
      case "increment" :
        return {
          count: state.count + 1
        }
        case "decrement":
          return {
            count: state.count > 0 ? state.count -1 : 0
          }
          case "reset":
            return {
              count:0
            }
            default:
              return state;
    }
  }

  const [state, dispatch] =useReducer(reducer, {count:0})

  return (
   <div>
    <h2>CounterValue:{state.count}</h2>
    <button onClick={()=> dispatch({type:"increment"})}>Increment</button>
    <button onClick={()=> dispatch({type:"decrement"})}>Decrement</button>
    <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
   </div>
  )
}

export default Counter
