import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SingleScenario = (props) => {
  return (
    <div className='languageOpt'>

      <Link to={`/languages/${props.language.id}/scenarios`}><div className='language-links'>
        <img />
        <p>{props.language.language}</p>
      </div>
      </Link>

    </div>
  )
}

export default connect()(SingleScenario)
