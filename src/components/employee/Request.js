 /* eslint-disable */ 
import React, {useState, useContext} from 'react'
import HolidayContext from '../../context/holidayContext/HolidayContext.js'
import CompNav from '../layout/CompNav.js'
import { FcCalendar } from 'react-icons/fc'
import DatePicker from "react-datepicker";




const Request = () => {

  const {addHoliday, holidays} = useContext(HolidayContext);

  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [holiday, setHoliday] = useState({
    date: '',
    type: '',
    title: '',
    comment: ''
  })
  const {date, type, title, comment} = holiday
  const handleChange = (e) => {
    setHoliday({
      ...holiday,
      [e.target.name]: e.target.value
    })
  }
  const onsubmit = (e) => {
    e.preventDefault();
    console.log(holiday);
    addHoliday(holiday);
    console.log(holidays)
    setHoliday({
      date: '',
      type: '',
      title: '',
      comment: ''
    })

  }

    return (  
        <body>
        <div className="container">
        <CompNav />
        
          <div className="main">
        
            <div className="section">
            <div className="mail-detail">
 
 <div className="mail-contents">
  <div className="mail-contents-subject">
   <input type="checkbox" name="msg" id="mail20" className="mail-choice" checked />
   <label for="mail20"></label>

  </div>
  <div className="">
  
   < FcCalendar />
   
   <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    
   </div>
   




   <div className="mail-checklist">
   <input type="text" name='date' value={date} placeholder="Date" onChange={handleChange}/>

   </div>
   <div className="mail-checklist">
   <input type="text" name='type' value={type} placeholder="Type of Holiday" onChange={handleChange}/>

   </div>
   <div className="mail-checklist">
   <input type="text" name='title' value={title} placeholder="Holiday Title" onChange={handleChange}/>
   </div>

   <div className="mail-checklist">
   <input type="text" name='comment' value={comment} placeholder="Write a comment..." onChange={handleChange}/>

   </div>

   <div class="buttons">

<div class="button button-primary" onClick={onsubmit}>Send</div>

</div>

  </div>
 </div>

 </div>
        
            </div>
          </div>

        </body>

        
    )

}

export default Request