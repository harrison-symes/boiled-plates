import React from 'react'
import * as D3 from 'd3'

  // margin and radius
  const margin = {top:20, right: 20, bottom: 20, left: 20}
  const width = 500 - margin.right - margin.left
  const height = 500 - margin.top - margin.bottom
  const radius = width/2
  // arc generator
  const arc = d3.arc()
  .outerRadius(radius -10)
  .innerRadius(0)
  // pie generator
  const pie = d3.pie()
  .sort(null)
  .value(function(d) { return d.count })
  // define svg
  const svg = d3.select('body').append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')')
  // import data
  d3.csv('progressData.csv', (err, data) => {
    if (err) throw err
    // parse the data
    data.forEach((d) => {
      d.count = +d.count //"0" -> 0
      d.post = d.post 
    })
    //append g elements
    const g =svg.selectAll('.arc')//selecting all the elements with the classname in .arc. It doesn't exist yet in DOM at this point 
    .data(pie(data))
    .enter().append("g")//It exists after enter() 
    .attr("class", "arc")

    //append the path of the arc
    g.append('path')
    .atrr('d', arc)
    .style('fill','yellow')
  })

  export default (props) => {

  return (

  )
}