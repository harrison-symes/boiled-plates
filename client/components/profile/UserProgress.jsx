import React from 'react'
import * as d3 from 'd3'

import CountProgress from './CountProgress'
import { connect } from 'react-redux'

class UserProgress extends React.Component {
  componentWillReceiveProps (props) {
    this.props.score
  }
  
  render () {
    
    const scoreNumber = Number(this.props.score)
    // console.log(scoreNumber)
    const progressBar = {
      tau: 2 * Math.PI,
      radius: 150,
      padding: -1,
      amount: scoreNumber, // Adjust me
      total: 100 // Adjust me
    }

    progressBar.boxSize = (progressBar.radius + progressBar.padding) * 2
    progressBar.ratio = progressBar.amount / progressBar.total

    return (
      <section>
        <CountProgress {...progressBar} />
      </section>
    )
  }
}

UserProgress.defaultProps = {
  score: ''
}

export default connect()(UserProgress)
