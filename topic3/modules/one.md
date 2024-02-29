# Fragments

```
return (
    <React.Fragment>

      <h1>Healthy Foods</h1>
      <ul className="list-group">
        <li className="list-group-item disabled" aria-disabled="true">A disabled item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
      
    </React.Fragment>
  )

```


1. Allows grouping of multiple elements without extra DOM nodes.
2. Return multiple elements without a wrapping parent.
3. Cleaner DOM and consistent styling.


```
    <>

      <h1>Healthy Foods</h1>
      <ul className="list-group">
        <li className="list-group-item disabled" aria-disabled="true">Dal</li>
        <li className="list-group-item">Green veggies</li>
        <li className="list-group-item">Milk</li>
        <li className="list-group-item">Oats</li>
        <li className="list-group-item">Eggs</li>
      </ul>

    </>

```


__The above is also an example of fragment__.


# Map Method


1. Render lists from array data.
2. Transform array items into JSX.
3. Directly inside JSX.
4. Assign unique key for optimized re-renders.


_Below is the use of map method_.


```
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  let foodItems = ['Dal',"Green veggies","Milk","Oats","Eggs"];

  return (

    <>

      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map(item => <li classNameName='list-group-item'>{item}</li>)}
      </ul>

    </>
  )
}

export default App


```