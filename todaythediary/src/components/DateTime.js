import React from 'react'
let dt = new Date()
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthname = ["Jan", "Feb","Mar","Apr","May","Jun", "Jul","Aug","Sep","Oct", "Nov", "Dec"];
const DateTime = () => {
    return (
        <div div className="col-2 bg-light  text-center m-3 ml-auto" >
            <h4>{dt.toDateString()}</h4>
        </div >
    )
}
export default DateTime;
export {dt} ;
export {weekday, monthname};
