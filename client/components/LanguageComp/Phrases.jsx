import React from 'react'
import { connect } from 'react-redux'
import { fetchPhrases } from '../../actions/phrases'
import SinglePhrase from './SinglePhrase'

class Phrases extends React.Component {
  componentDidMount () {
    const scenarioId = this.props.match.params.id
    this.props.dispatch(fetchPhrases(scenarioId))
  }

  render () {
    return (
      <div className='languageOpt'>
        {this.props.phrases.map((phrase) => {
          return (
            <div className='language-links' key={phrase.id}>
              <SinglePhrase phrase={phrase} />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    phrases: state.phrases
  }
}

export default connect(mapStateToProps)(Phrases)
