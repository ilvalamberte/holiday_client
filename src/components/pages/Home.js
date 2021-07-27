import React, { useContext, useRef} from 'react'
import Employee from '../employee/Employee.js'
import Navbar from '../layout/Navbar.js'
import CompNav from '../layout/CompNav.js'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {FcSearch} from 'react-icons/fc'
import HolidayContext from '../../context/holidayContext/HolidayContext.js'


function Home () {

  const { users, searchUser, clearSearch, search } = useContext(HolidayContext);
  const searchValue = useRef('')
  const handleChange = e => {
    if(searchValue.current.value !== '') {
      searchUser(e.target.value)
    } else {
      clearSearch();
    }
  }

  return (

    <body>
   
<div className="container">
<CompNav />

  <div className="main">
    <header>
  
      <form>
  <div className="inputWrapper">
	<input type="search" placeholder="Search" onChange={handleChange}>
  </input>
  </div>
</form>
    </header>

    <div className="section">

{search!== null ? search.map(user => <Employee key={user.id} user={user}/>) :
users.map (user => <Employee key={user.id} user={user}/>)}

    </div>
  </div>
</div>
</body>

  );
}

export default Home;
