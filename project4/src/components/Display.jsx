import React from 'react'
import './Display.css'

function Display({displayVal}) {
  return (
    <>
        <input type="text" classNameName="display" value={displayVal} readOnly />
    </>
  )
}

export default Display