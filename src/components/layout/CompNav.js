import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/authContext/authContext.js'

import {FcCalendar} from 'react-icons/fc'
import {FcBusinessman} from 'react-icons/fc'
import {FcTimeline} from 'react-icons/fc'
import {FcServices} from 'react-icons/fc'
import {FcPlus} from 'react-icons/fc'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Request from '../employee/Request.js'
import Navbar from './Navbar.js'

const CompNav = () => {
  const {user, getUser} = useContext(AuthContext);

  useEffect (()=> {
    getUser()
  }, []) 

  console.log(user);
    return (
        <div className="aside">
        <div className="user">
          <div>
            <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="User photo" />
          </div>
          <div className="user__info">
            <h4>{user && user.email}</h4>
            <p>Copenhagen</p>
          </div>
        </div>
     <Navbar />
      </div>
    )


} 

export default CompNav