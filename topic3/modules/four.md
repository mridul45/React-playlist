# Passing Children

1. Children is a special prop for passing elements into components.
2. Used for flexible and resuable component designs.
3. Common in layout or container components.
4. Accessed with props.children
5. Can be any content: strings, numbers, JSX, or components.
6. Enhances components composability and reusability.


__App.jsx__

```
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import FoodItems from './components/FoodItems'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)
  // let foodItems = [];
  return (

    <Container>
      <h1>Healthy Foods</h1>
      <FoodItems/>
    </Container>
  )
}

export default App

```


__Container.jsx__


```
import React from 'react'

function Container(props) {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Container

```