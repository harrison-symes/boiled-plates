import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Singleprofile (props) {
  const profile = props.profile

  return (
    <div className=''>
      <img src={profile.image} alt=''></img>
      <hr />
      <p>{profile.firstname}</p>
      <p>{profile.lastname}</p>
      <p>{profile.email}</p>
      {/* <p>{profile.progress}</p>
      <p>{profile.posts}</p> */}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id)
  return {
    profile: state.profiles.find(profile => id === profile.id)
  }
}

export default connect(mapStateToProps)(Singleprofile)
