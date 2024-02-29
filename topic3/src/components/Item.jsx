import React from 'react'
import './Item.css'

function Item({foodItem}) {

  const handleBuyButtonClicked = () => {
    console.log(`${foodItem} bought`)
  }

  return (
    <>
        <li key={foodItem} classNameName='list-group-item'>{foodItem}</li>
        <button classNameName='button' onClick={() => handleBuyButtonClicked()}>Buy</button>
    </>
  )
}

export default Item