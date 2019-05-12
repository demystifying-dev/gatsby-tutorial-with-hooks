import React, { useState } from "react"
import Header from "../components/header"

const home = () => {
  const [title] = useState("Hi! I'm building a fake Gatsby site as part of a tutorial!")
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600, color: `purple` }}>
      <Header headerText={title}/>
      <img src="https://source.unsplash.com/random/1920x1080" alt="" />
      <p>
        What do I like to do? Lots of course but definitely enjoy building websites.
      </p>
    </div>
  )
}

export default home
