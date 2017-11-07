import React from 'react'
import * as d3 from 'd3'

import CountProgress from './CountProgress'

class UserProgress extends React.Component {
  render () {
    const progressBar = {
      tau: 3 * Math.PI,
      radius: 150,
      padding: -1,
      amount: 15, // Adjust me
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

export default UserProgress
