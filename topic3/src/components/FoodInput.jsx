import React from 'react'
import "./FoodInput.css"

function FoodInput({handleOnChange}) {

  return (
    <>
        <input type="text" placeholder='Enter food' classNameName='foodInput' onKeyDown={handleOnChange }/>
    </>
  )
}

export default FoodInput