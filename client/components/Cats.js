import React from 'react'
import {connect} from 'react-redux'

import {getCats} from '../actions/cats'

const renderCat = (cat, key) => (
  <h1 key={key}>{cat.text}</h1>
)

const Cats = ({cats, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getCats())}>Cats</button>
    {cats.map(renderCats)}
  </div>
)

const mapStateToProps = (state) => {
  return {cats: state.cats}

}

export default connect(mapStateToProps)(Cats)
