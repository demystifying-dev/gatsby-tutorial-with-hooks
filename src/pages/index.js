import React, { useState } from "react"

const home = () => {
  const [titulo] = useState('Hello Gatsby Hook World!')
  return (
    <div style={{ color: `purple`, fontSize: `72px` }}>{titulo}</div>
  )
}

export default home
