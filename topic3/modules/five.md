# Handeling Events

1. React uses cammelCase.
2. Uses synthetic events, not direct browser events.
3. Event handlers can be functions or arrow functions.
4. Use onChange for controlled form inputs.
5. Avoid inline arrow functions in JSX for performance.


__Code__


```
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

```


# Passing Functions via props.

1. Pass Dynamic behaviour between components.
2. Enables Upward communication from child to parent.
3. Commonly used for event handling.
4. Parent defines a function, child invokes it.
5. Enhances component interactivity.