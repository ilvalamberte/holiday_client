 /* eslint-disable */ 
import React, {useContext} from 'react'
import HolidayContext from '../../context/holidayContext/HolidayContext.js'

import { FcCalendar } from 'react-icons/fc'
import { FcAnswers } from 'react-icons/fc'


const Holiday = ({holiday}) => { 

const {removeHoliday} = useContext(HolidayContext);

const { title, date, type, comment, status, status_date, id} = holiday

const handleRemove = () => {
  removeHoliday(id)
}


let addedInput = false;


function createNewElement() {
  // First create a DIV element.
var txtNewInputBox = document.createElement('div');

  // Then add the content (a new input box) of the element.
txtNewInputBox.innerHTML = "<input type='text' name='comment' placeholder='comment' onChange={handleChange}/>";

  // Finally put it where it is supposed to appear.
document.getElementById("mailers").appendChild(txtNewInputBox);
addedInput = true;

}

function addedOnce () {
  if (!addedInput) createNewElement()
}


    return (  
    
<div className="mail-contents">
<div className="mail-contents-subject">
 <input type="checkbox" name="msg" id="mail20" className="mail-choice" checked />
 <label for="mail20"></label>
 <div className="mail-contents-title">{title}</div>
</div>
<div className="mail">
 <div className="mail-time">
< FcCalendar />
{date}
 </div>
 <div className="mail-time">
< FcAnswers />
{type}
 </div>
 <div className="mail-inside">{comment}</div>

 <div className="mail-checklist">
  <input type="checkbox" name="msg" id="mail30" className="mail-choice" checked />
  <label for="mail30">{status === true ? "Accepted"  : "Rejected"}</label>
  <div className="mail-checklist-date">{status_date}</div>
 </div>
 <div id="mailers">

 </div>

 <div className="mail-doc" id="addHere">
 <div class="buttons">
   <div class="button" onClick={handleRemove}>Delete</div>
   <div class="button button-primary" onClick={addedOnce}>Update</div>
 </div>

 </div>
</div>
</div>

)

}

export default Holiday