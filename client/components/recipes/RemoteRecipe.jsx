import React from 'react'
import { connect } from 'react-redux'
import { searchRecipes } from '../actions/remoteRecipes'

class RemoteRecipe extends React.Component {
  componentDidMount () {
    this.props.dispatch(searchRecipes('35120'))
  }

  render () {
    const { name, country, forecast } = this.props.weather
    console.log(this.props)
    const { base, mid, upper } = forecast
    const loading =
      <img src={'https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif'} />
    return (
      <div className='weatherBox'>
        <div className='locationBox'>
          <span>{name},</span><span><b>{country}</b></span>
        </div>
        <div className='dataBox'>
          <div className='info'>
            <p><b>28th June 2017</b></p>
            <div className='datas'>
              {loading}
            </div>

            <div className='datas'>
              <p><b>Base</b></p>
              <ul>
                <li>
                  Freshsnow: {base.freshsnow || '--'}
                </li>
                <li>
                  Temperature: {base.temperature || '--'}
                </li>
                <li>
                  Windspeed: {base.windspeed || '--'}
                </li>
              </ul>
            </div>

            <div className='datas'>
              <p><b>Mid</b></p>
              <ul>
                <li>
                  Freshsnow: {mid.freshsnow || '--'}
                </li>
                <li>
                  Temperature: {mid.temperature || '--'}
                </li>
                <li>
                  Windspeed: {mid.windspeed || '--'}
                </li>
              </ul>
            </div>

            <div className='datas'>
              <p><b>Upper</b></p>
              <ul>
                <li>
                  Freshsnow: {upper.freshsnow || '--'}
                </li>
                <li>
                  Temperature: {upper.temperature || '--'}
                </li>
                <li>
                  Windspeed: {upper.windspeed || '--'}
                </li>
              </ul>
            </div>
          </div>
          <div className='mapBox'>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return {
    weather
  }
}

export default connect(mapStateToProps)(RemoteRecipe)
