import React from 'react';

import { useCount } from '../../context/Count'

function Counter() {
  // Hook being used
  const { count, setCount } = useCount()

  return (
    <div>
      <span>Count: </span>{count}

      <br />

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Counter;