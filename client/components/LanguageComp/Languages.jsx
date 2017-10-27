import React from 'react'
import { connect } from 'react-redux'
// import Sound from 'react-sound'

import { fetchLanguages } from '../../actions/languages'
import SingleLanguage from './SingleLanguage.jsx'

class Languages extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchLanguages())
  }

  render () {
    return (
      <div className='languageOpt'>
        {this.props.languages.map((language) => {
          return (
            <div className='language-links' key={language.id}>
              <SingleLanguage language={language}/>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.languages
  }
}

export default connect(mapStateToProps)(Languages)
