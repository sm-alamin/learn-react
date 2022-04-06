import React, { useState } from 'react'

function LearnHooks() {
    const [count, setCount] = useState(0)

  const  addIncrement =() => {
        setCount(count + 1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick ={addIncrement}>Increment</button>
    </div>
  )
}

export default LearnHooks