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