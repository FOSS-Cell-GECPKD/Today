import React, { Fragment, useState } from 'react'
import DateTime from '../DateTime'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './Navbar.css';
import { IconContext } from 'react-icons';
import Sidebar from './Sidebar'


const Topbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <Fragment>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="conatiner col-12 mainbar bg-primary d-flex ml-auto">
                    <div className={sidebar ? 'd-none' : 'navbar'} >
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </div>
                    <h3 className="text-light showtext">How Was Today</h3>
                    <DateTime />
                </div>
                {sidebar && <Sidebar onClick={showSidebar} />}
            </IconContext.Provider>
        </Fragment>
    )
}

export default Topbar
