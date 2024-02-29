# Conditional Rendering

1. Displaying content based on certain conditions.
2. Allows for dynamic user interfaces.

__Methods__

1. __if-else__: Choose between 2 blocks of content.
2. __Ternary operators__: Quick way to choose between 2 options.
3. __Logical Operators__: Useful for rendering content when a condition is true.

__Benefits__

1. Enhances user experience.
2. Reduces unnecessary rendering.
3. Makes apps more interactive and responsive.


```
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  // let foodItems = ['Dal',"Green veggies","Milk","Oats","Eggs","Ghee"];
  let foodItems = [];

  if(foodItems.length === 0){
    return <h3>I am still Hungry</h3>
  }

  return (

    <>

      <h1>Healthy Foods</h1>
      <ul classNameName="list-group">
        {foodItems.map(item => <li key={item} classNameName='list-group-item'>{item}</li>)}
      </ul>

    </>
  )
}

export default App

```


__Using Ternary operators__


```
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  // let foodItems = ['Dal',"Green veggies","Milk","Oats","Eggs","Ghee"];
  let foodItems = [];
  return (

    <>

      <h1>Healthy Foods</h1>
      {foodItems.length === 0 ? <h3>I am still Hungry</h3> : null }
      <ul classNameName="list-group">
        {foodItems.map(item => <li key={item} classNameName='list-group-item'>{item}</li>)}
      </ul>

    </>
  )
}

export default App

```