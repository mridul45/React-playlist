import React from 'react'
import './Container.css'

function Container({children}) {
  return (
    <div classNameName='container'>
        {children}
    </div>
  )
}

export default Container