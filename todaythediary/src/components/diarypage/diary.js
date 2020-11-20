import React , {useState} from 'react'; 
import './diary.css';
import {dt, weekday, monthname} from '../DateTime';
import { FaImages, FaRegSave, FaGoogleDrive, FaTrashAlt } from "react-icons/fa";
import { IconContext } from 'react-icons';
function DiaryPage() {
    const [diarytxt , setDiarytxt] = useState("");
    const diaryTextHandler = (e) =>{
        setDiarytxt(e.target.value);
        console.log(diarytxt);
    }
    return(
        <div className="content-bg">
            <div className="container py-1">
                <div className="row diarynav  ">
                    <div className="col-6">
                        <h2>{weekday[dt.getDay()]}</h2>                      
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <h2>{ monthname[dt.getMonth()] }&nbsp;&nbsp;{dt.getDate()}</h2>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <textarea className="d-flex mx-auto mt-4" placeholder="Click here to write" onChange={ diaryTextHandler }></textarea>
                </div>
            </div>
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <FaImages /> <FaRegSave /> <FaGoogleDrive /> <FaTrashAlt />
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default DiaryPage;