import React from 'react'
import Item from './Item'

function TodoItems({todoItems}) {
  return (
    <>
        <div classNameName="items-container">
            {todoItems.map(item => <Item todoName={item.name} todoDate={item.dueDate}/>)} 
            {/* used Map function above */}
        </div>
    </>
  )
}

export default TodoItems