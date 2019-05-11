import React, { useState } from "react"

const home = () => {
  const [title] = useState('Hello Gatsby Hook World!')
  const [subTitle] = useState('Gatsby Meets Hooks')
  return (
    <div style={{ color: `purple` }}>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

export default home
