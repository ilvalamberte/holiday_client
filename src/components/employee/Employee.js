 /* eslint-disable */ 
import React, {useContext} from 'react';
import HolidayContext from '../../context/holidayContext/HolidayContext.js'


const Employee = ({user}) => {
  const {image, laptop, mobile, name, occupation, country } = user


    return (

                <div className="card">
        <img src={image} alt="Authors photo" class="card__avatar" />
        <p className="card__name">{name}</p>
        <p className="card__country">{occupation}</p>
        <p className="card__status badge success">{mobile}</p>
        <p className="card__article">{country}</p>
        <p className="buttonCard">SHOW PROFILE</p>
      </div>
   
    )

}

export default Employee