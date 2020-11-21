import React from 'react'
import {
    Nav,
    NavbarBrand,
    NavItem
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';
import { IconContext } from 'react-icons';
const Sidebar = (props) => {
    return (
        <div className="d-flex flex-column col-xs-6 col-sm-5 col-md-3 col-lg-2  sidebar "  >
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar-toggle' onClick={props.onClick}>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </div>
                <NavbarBrand className="p-2  display-head  m-2"> <NavLink to='/home' className="text-light text-decoration-none" style={{fontFamily: 'Aladin'}} >Today</NavLink></NavbarBrand>
                <Nav navbar>
                    <div className="text-center">
                        <img src="assets/download.jpg" className="profile ml-auto" alt="profile pic here" />
                        <h6 className="text-light m-3 ">live love laugh</h6>
                    </div>
                    <NavLink to="/diary" className="p-2 text-light display-4 m-2 text-center text-decoration-none"> Dairy</NavLink>
                    <NavLink to="/todo" className="p-2 text-light display-4 m-2 text-center text-decoration-none"> ToDo</NavLink>
                    <NavLink to="/social" className="p-2 text-light display-4 m-2 text-center text-decoration-none"> Go Social</NavLink>
                    <NavItem className="p-2  display-4 mt-2 p-3 text-center">
                        <NavLink to="/contactus" className="text-light align-items-end text-decoration-none"> contact us</NavLink>
                    </NavItem>
                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Sidebar
