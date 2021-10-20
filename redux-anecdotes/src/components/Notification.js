import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) =>
{
  const text = props.text
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={text === '' ? { display: 'none' } : style}>
      {text}
    </div>
  )
}

const mapStateToProps = (state) =>
{
  return { text: state.notification.text }
}

export default connect(mapStateToProps)(Notification)