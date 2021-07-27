 /* eslint-disable */ 
 import React, {useContext} from 'react';
 import HolidayContext from '../../context/holidayContext/HolidayContext.js'
 
 
 const AdminPage = () => {
   const holidays = useContext(HolidayContext);
   
   const {type, comment, approveHoliday} = holidays
 
 
     return (
 
                 <div className="card">

         <p className="card__name">{type}</p>
         <p className="buttonCard">TOTAL P</p>
         <p className="buttonCard">TOTAL E</p>
         <p className="buttonCard">TOTAL S</p>
    
       </div>
    
     )
 
 }
 
 export default AdminPage