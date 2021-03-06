import React from 'react'
let dt = new Date()
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames = ["Jan", "Feb","Mar","Apr","May","Jun", "Jul","Aug","Sep","Oct", "Nov", "Dec"];
const DateTime = () => {
    return (
        <div div className="col-md-3 col-sm-3 mr-1 ml-auto bg-dark  text-center text-white my-4 " style={{width: '800px'}}>
            <h4>{dt.toDateString()}</h4>
        </div >
    )
}

export {dt, weekDays, monthNames};
export default DateTime;