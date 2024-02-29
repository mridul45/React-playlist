import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'

function App() {
  
  let [calVal,setCalVal] = useState("")

  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("")
    }
    else if(buttonText === '='){
      const result = eval(calVal)
      setCalVal(result)
    }
    else{
      const newDisplayValue = calVal+buttonText
      setCalVal(newDisplayValue)
    }
  }

  return (
    <>
      <div classNameName="calculator">
        <Display displayVal={calVal}/>
        <ButtonContainer onButtonClick={onButtonClick}/>
      </div>
    </>
  )
}

export default App
