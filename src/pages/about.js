import React, { useState } from "react"

const about = () => {
  const [title] = useState('About Gatsby Hook World!')
  const [subTitle] = useState('Gatsby Likes Hooks')
  return (
    <div style={{ color: `purple` }}>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

export default about
