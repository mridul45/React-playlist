import React from 'react'

function Item({todoName,todoDate}) {

    return (
        <>
            <div className="container">
    
                <div className="row kg-row">
                <div className="col-4">
                    <h5>{todoName}</h5>
                </div>
                <div className="col-4">
                    <h5>{todoDate}</h5>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
                </div>
                </div>
        </>
      )
}

export default Item