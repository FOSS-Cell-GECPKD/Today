import React, { Fragment, useState } from 'react'
import DateTime from '../DateTime'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './Navbar.css';
import { IconContext } from 'react-icons';
import Sidebar from './Sidebar'


const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <Fragment>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className="conatiner col-12 mainbar bg-dark d-flex ml-auto">
                    <div className={sidebar ? 'invisible' : 'navbar'} >
                        <Link to='#' className='menu-bars ml-xs-0 ml-sm-1'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <h3 className="text-light showtext " style={{width: '500px', fontFamily:'Aladin'}} >Dear Diary</h3>
                    <DateTime style={{fontSize: '140%', marginTop: "10px"}} />
                </div>
                {sidebar && <Sidebar onClick={showSidebar} />}
            </IconContext.Provider>
        </Fragment>
    )
}

export default NavBar
