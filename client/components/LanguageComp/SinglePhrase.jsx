import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Sound from 'react-sound'

class SinglePhrase extends React.Component {
  render () {
    return (

      <div className='scenario'>
        <p>{this.props.phrase.phrase}</p>
        <p>{this.props.phrase.samoanPhrase}</p>
        <p>{this.props.phrase.soundFile}</p>

        <Sound
          url={this.props.phrase.soundFile}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </div>
    ) 
}
}

export default connect()(SinglePhrase)
