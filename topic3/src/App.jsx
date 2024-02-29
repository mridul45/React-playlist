import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import FoodItems from './components/FoodItems'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  
  let [textState,setTextState] = useState("")
  // let [foodItems,setFoodItems] = (["Rajma","Rice","Dahi Kebab","Manchurian"])

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setTextState(e.target.value)
}
  // let foodItems = [];
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <FoodInput handleOnChange={handleOnChange}/>
        <p>Food Item Entered by the user is: {textState}</p>
        <FoodItems/>
      </Container>

      {/* <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima consequatur, a hic sint eligendi tenetur, consequuntur cumque animi perferendis incidunt odit sequi odio tempora ea cum, expedita minus voluptates facere possimus quis quia. Sequi possimus praesentium, ad quia dolorem molestias eum sed rerum culpa eligendi enim asperiores rem laudantium.</p>
      </Container> */}
    </>
  )
}

export default App