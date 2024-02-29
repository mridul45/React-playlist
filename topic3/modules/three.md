# Passing Data via Props

__Props in React__

1. Mechanism for passing data.
2. Read-only by default.

__Usage__

1. Pass data from parent to child component.
2. Makes components resuable.
3. Defined as attributes in JSX.

__Key Points__

1. Data flows one-way(downwards).
2. Props are immutable.
3. Used for communication between components.



_Item.jsx_


```
import React from 'react'

function Item({foodItem}) {
  return (
    <>
        <li key={foodItem} classNameName='list-group-item'>{foodItem}</li>
    </>
  )
}

export default Item

```


_FoodItems.jsx_


```
import React from 'react'
import Item from './Item';

function FoodItems() {
    
    let foodItems = ['Dal',"Green veggies","Milk","Oats","Eggs","Ghee"];

    return (
        <>
            <ul classNameName="list-group">
                {foodItems.map(
                    item => <Item key={item} foodItem={item}/>
                )}
            </ul>
        </>
    )
}

export default FoodItems

```