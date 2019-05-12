import React, { useState } from "react"
import Header from "../components/header"

const home = () => {
  const [title] = useState('Hello Gatsby Hook World!')
  const [subTitle] = useState('Gatsby Meets Hooks')
  return (
    <div style={{ color: `purple` }}>
      <Header headerText={title}/>
      <Header headerText={subTitle}/>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

export default home
