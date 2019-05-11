import React, { useState } from "react"

const home = () => {
  const [title] = useState('Hello Gatsby Hook World!')
  const [subTitle] = useState('Gatsby Meets Hooks')
  return (
    <div style={{ color: `purple` }}>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  )
}

export default home
