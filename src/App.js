 /* eslint-disable */ 
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthState from './context/authContext/authState.js'
import Home from './components/pages/Home.js'
import Request from './components/employee/Request.js'
import Holidays from './components/employee/Holidays.js'
import Holiday from './components/employee/Holiday.js'
import HolidayState from './context/holidayContext/HolidayState.js'
import Navbar from '../src/components/layout/Navbar.js'
import EditProfile from './components/employee/EditProfile.js'
import CalendarComp from './components/layout/CalendarComp.js'

import AdminPage from './components/layout/AdminPage';

import setToken from '../src/utils/setToken.js'


//if there is a token in local, assign it to setToken
if (localStorage.token) {
  setToken(localStorage.token)
}

function App() {

  return (

<div>
  <AuthState>
  <HolidayState>
  <Router>
    <Switch>
<Route path="/editpr" component={EditProfile} />  
<Route path="/request" component={Request} />  
<Route path="/members" component={Home} />
<Route path="/" component={Holidays} />
<Route path="/navbar" component={Navbar} />
<Route path="/calendarcomp" component={CalendarComp} />
<Route path="/holiday" component={Holiday} />
<Route path="/admin" component={AdminPage} />
  </Switch>
  </Router>
  </HolidayState>
  </AuthState>
  </div>
  );

}

export default App;
