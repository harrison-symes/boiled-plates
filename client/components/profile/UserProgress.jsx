import React from 'react'
import * as d3 from 'd3'

import CountProgress from './CountProgress'
import { connect } from 'react-redux'

class UserProgress extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = { scoreNumber: this.props.score }
  // }

  // componentWillReceiveProps (nextProps) {
  //   console.log({nextProps})
  //   this.setState({ scoreNumber: nextProps.score })
  // }

  render () {
    const scoreNumber = this.props.score * 6
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
        <CountProgress {...progressBar} image={this.props.image} />
      </section>
    )
  }
}

UserProgress.defaultProps = {
  score: 0
}

export default connect()(UserProgress)
