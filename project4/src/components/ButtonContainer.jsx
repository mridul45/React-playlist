import React from 'react'
import './ButtonContainer.css'

function ButtonContainer({onButtonClick}) {

    const buttonNames = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];

  return (
    <>
        <div classNameName="buttons-container">
            {buttonNames.map(buttonName => <button classNameName='button' onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>)}
        </div>
    </>
  )
}

export default ButtonContainer