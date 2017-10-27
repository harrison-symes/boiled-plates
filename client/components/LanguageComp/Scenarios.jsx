import React from 'react'
import { connect } from 'react-redux'
import { fetchScenarios } from '../../actions/scenarios'
import SingleScenario from './SingleScenario.jsx'

class Scenarios extends React.Component {
  componentDidMount () {
    const languageId = this.props.match.params.id
    this.props.dispatch(fetchScenarios(languageId))
  }

  render () {
    return (
      <div className='languageOpt'>
        {this.props.scenarios.map((scenario) => {
          return (
            <div className='scenario-link' key={scenario.id}>
              <SingleScenario scenario={scenario} />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    scenarios: state.scenarios
  }
}
export default connect(mapStateToProps)(Scenarios)
