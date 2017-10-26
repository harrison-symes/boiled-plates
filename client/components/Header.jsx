import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h1>Speacifik</h1>
      <p>Learn the languages of the South Pacific</p>
      <div className='navBar'>
        <span>About</span>
        <span>Sign Up</span>
        <span>Sign In</span>
        <span>Contact</span>
      </div>
    </div>
  )
}

export default Header
