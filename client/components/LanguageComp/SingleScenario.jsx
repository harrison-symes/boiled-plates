import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SingleScenario = (props) => {
  return (
    <div className='single-scenario'>

      <Link to={`/scenario/${props.scenario.id}/phrases`}><div className='scenario'>
        <img />
        <p>{props.scenario.scenario}</p>
      </div>
      </Link>

    </div>
  )
}

export default connect()(SingleScenario)
