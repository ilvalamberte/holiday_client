import React, {useContext} from 'react'

import {FcCalendar} from 'react-icons/fc'
import {FcBusinessman} from 'react-icons/fc'
import {FcTimeline} from 'react-icons/fc'
import {FcServices} from 'react-icons/fc'
import {FcPlus} from 'react-icons/fc'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Request from '../employee/Request.js'
import AuthContext from '../../context/authContext/authContext.js'

const Navbar = () => {

  const {logout} = useContext(AuthContext);

    return (
 
        <nav>
        <ul>
          <li>
           
             <FcCalendar />
             <NavLink to='/calendarcomp'>
            <span>Calendar</span>
            </NavLink>
          </li>
          <li>
            <FcBusinessman />
            <NavLink to='/members'>
            <span>Members</span>
            </NavLink>
          </li>
          <li>
        <FcTimeline />
        <NavLink to='/holidays'>
            <span>My Holidays</span>
            </NavLink>
          </li>
          
          <li>
        < FcPlus />
        <NavLink to='/request'>
            <span>Request</span>
        </NavLink>
          </li>
      
          <li>
        <FcServices />
        <NavLink to='/editpr'>
            <span>Edit Profile</span>
        </NavLink>
  </li>
  <li>
 

            <span  onClick={logout}>Logout</span>
       
  </li>
        </ul>
      </nav>
      
    )


} 

export default Navbar