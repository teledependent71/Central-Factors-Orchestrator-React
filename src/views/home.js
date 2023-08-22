import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Central Factors Orchestrator</title>
        <meta property="og:title" content="Central Factors Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
