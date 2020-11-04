import React from 'react'
let dt = new Date()

const DateTime = () => {
    return (
        <div div className="col-2 bg-light  text-center m-3 ml-auto" >
            <h4>{dt.toDateString()}</h4>
        </div >
    )
}
export default DateTime
