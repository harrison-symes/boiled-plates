import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Languages from './Language Components/Languages.jsx'

class Home extends React.Component {
  render () {
    return (
      <div className='container'>
        <section className="section">
          <h2>Learn the tounge of the South Pacific</h2>
          <div className='banner'>
            <figure className="image">
              <img src="http://annapolisopera.org/wp-content/uploads/2013/05/South-Pacific-website.jpg" />
            </figure>
          </div>
          <br />
          <div className='info'>
            <h3>Learn to speak anytime, anywhere.</h3>
            <p>//MISSION OR A BACKGROUND TO WHY THIS PAGE EXISTS.</p>
          </div>
          <br />
          <br />
          <Languages />
        </section>
      </div>
    )
  }
}

export default Home
