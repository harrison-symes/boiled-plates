import React from 'react'
import * as d3 from 'd3'

class CountProgress extends React.Component {
  componentDidMount () {
    const { tau, radius, padding, amount, total, boxSize, ratio } = this.props

    this.renderSVG(radius, boxSize, tau, ratio)
    this.renderText(amount, total)
  }
  componentWillReceiveProps (nextProps) {
    const { tau, radius, padding, amount, total, boxSize, ratio } = nextProps

    this.renderSVG(radius, boxSize, tau, ratio)
    this.renderText(amount, total)
  }
  renderSVG (radius, boxSize, tau, ratio) {
    // Transition function
    const arcTween = function (newAngle) {
      return function (d) {
        const interpolate = d3.interpolate(d.endAngle, newAngle)

        return function (t) {
          d.endAngle = interpolate(t)

          return arc(d)
        }
      }
    }

    // Arc function
    const arc = d3.arc()
      .innerRadius(radius)
      .outerRadius(radius - 20)
      .startAngle(0)

    // Initial SVG render
    this.svg = d3.select(this.refs.container)
      .attr('width', boxSize)
      .attr('height', boxSize)
      .append('g')
      .attr('transform', `translate(${boxSize / 2}, ${boxSize / 2})`)

    // Background Arc
    this.svg.append('path')
      .datum({ endAngle: tau })
      .style('fill', '#dfe3e6')
      .attr('d', arc)

    // Foreground Arc
    this.svg.append('path')
      .datum({ endAngle: 0 })
      .style('fill', '#FE8500')
      .transition()
      .duration(1000)
      .delay(500)
      .attrTween('d', arcTween(ratio * tau))
  }

  renderText (amount, total) {
    // 	// Text Labels
    const amountText = d3.select('.amount')
    const totalText = d3.select('.total')
    amountText
      .style('opacity', 0)
      .transition()
      .duration(1000)
      .delay(1500)
      .style('opacity', 1)
      .text(`${amount}GB`)

    totalText
      .style('opacity', 0)
      .transition()
      .duration(1000)
      .delay(1700)
      .style('opacity', 1)
      .text(`/${total}GB`)
  }

  render () {
    // console.log(this.props)
    return (
      <div id="d3-graph">
        <div>
          <svg id="svg-image" ref="container" style={{backgroundImage: `url(${this.props.image})`}}>
          </svg>
        </div>
        {/* <div className="text">
          <p className="amount"></p>
          <p className="total"></p>
        </div> */}
      </div>
    )
  }
}

export default CountProgress
