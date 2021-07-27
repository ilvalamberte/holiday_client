 /* eslint-disable */ 
import React from 'react'
import CompNav from '../layout/CompNav.js'
import { FcCalendar } from 'react-icons/fc'


const EditProfile = () => {

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
  <div className="mail">
   <div className="mail-time">

    
   </div>

   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Name" />
   </div>
   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Email" />
   </div>
   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Password" />
   </div>
   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Occupation" />
   </div>
   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Country" />
   </div>
   <div className="mail-checklist">
   <input type="text" title="username" placeholder="Mobile" />
   </div>


   <div class="buttons">
<div class="button">Update</div>

</div>

  </div>
 </div>

 </div>
        
            </div>
          </div>
        </div>
        </body>

        
    )

}

export default EditProfile