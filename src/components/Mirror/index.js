import React from 'react';

import { useCount } from '../../context/Count'

function Mirror() {
  // Hook being used
  const { count } = useCount()

  return (
    <div>Mirror: {count}</div>
  )
}

export default Mirror;