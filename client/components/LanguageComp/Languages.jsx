import React from 'react'
import {Link} from 'react-router-dom'

const Languages = () => {
  return (
    <div className='languageOpt'>
      <Link to="/Scenarios"><div className='language-links'><img /><p>Samoan</p></div></Link>
      <div className='language-links'><img /><p>Fijian</p></div>
      <div className='language-links'><img /><p>Tongan</p></div>
      <div className='language-links'><img /><p>Te Reo Maori</p></div>
      <div className='language-links'><img /><p>Vanuatu(Bislama)</p></div>
    </div>
  )
}

export default Languages
