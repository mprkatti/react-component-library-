import React from 'react'

const Error = ({ touched, message }) => {

  if (!touched) { return <div style={{ color: 'red', fontSize: '12px' }}> &nbsp;</div> }

  if (message) { return <div style={{ color: 'red', fontSize: '12px' }} > {message} </div> }

  return (<div style={{ color: 'green', fontSize: ' 10px' }}> ok</div>)

}

export default Error;
