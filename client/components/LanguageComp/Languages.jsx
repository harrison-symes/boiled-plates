import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

const Languages = () => {
  return (
    <div className='languageOpt'>
      <div className='language-links'><img /><p>Samoan</p></div>
      <div className='language-links'><img /><p>Fijian</p></div>
      <div className='language-links'><img /><p>Tongan</p></div>
      <div className='language-links'><img /><p>Te Reo Maori</p></div>
      <div className='language-links'><img /><p>Vanuatu(Bislama)</p></div>
    </div>
  )
}

export default Languages
