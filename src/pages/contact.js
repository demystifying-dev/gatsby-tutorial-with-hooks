import React, { useState } from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const home = () => {
  const [title] = useState('Contact')
  return (
    <div style={{ color: `purple` }}>
      <Link to="/">Home</Link> 
      <Header headerText={title}/>
      <p>Send us a message!</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

export default home
