import React, { useState } from "react"

const home = () => {
  const [titulo] = useState('Hello hook world!')
  return (
    <div>{titulo}</div>
  )
}

export default home
