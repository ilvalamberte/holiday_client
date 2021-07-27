 /* eslint-disable */ 
import React, {useContext} from 'react'
import HolidayContext from '../../context/holidayContext/HolidayContext.js'
import { FcApproval } from 'react-icons/fc'
import { FcHighPriority } from 'react-icons/fc'
import { FcCalendar } from 'react-icons/fc'
import { FcAnswers } from 'react-icons/fc'
import Holiday from '../employee/Holiday.js'
import CompNav from '../layout/CompNav.js'

const Holidays = () => {

const {holidays, toggleFilter, filterGuest} = useContext(HolidayContext);

    return (  
    <body>
    <div className="container">
    <CompNav />
      <div className="main">
        <header>
        <label class="label">
<div class="toggle">
  <input class="toggle-state" type="checkbox" name="check" value="check" onChange={()=> toggleFilter() }/>
  <div class="indicator"></div>
</div>
<div class="label-text">ACCEPTED</div>
</label>
        </header>
        <div className="section">
        <div className="mail-detail">

{holidays.filter(holiday => !filterGuest || holiday.status).map(holiday => <Holiday key={holiday.id} holiday={holiday}/>)}

    </div>   
    
        </div>
      </div>
    </div>
    </body>
    
    )

}

export default Holidays