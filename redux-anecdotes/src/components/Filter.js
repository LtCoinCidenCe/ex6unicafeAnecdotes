import React from 'react'
import { connect } from 'react-redux'
import { filterAction } from '../reducers/filterReducer'

const Filter = (props) =>
{
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={
        (event) =>
        {
          props.filterAction(event.target.value)
        }} />
    </div>
  )
}

const mapDispatchToProps = {
  filterAction
}

export default connect(null, mapDispatchToProps)(Filter)
