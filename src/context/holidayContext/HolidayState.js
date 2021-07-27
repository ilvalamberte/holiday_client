 /* eslint-disable */
import React, {useReducer} from 'react';
import HolidayContext from '../holidayContext/HolidayContext.js'
import HolidayReducer from '../holidayContext/HolidayReducers.js'
import {
    TOGGLE_FILTER,
    SEARCH_USER, 
    CLEAR_SEARCH,
    ADD_HOLIDAY,
    REMOVE_HOLIDAY
} from '../types.js'

const HolidayState = (props) => {
    const initialState = {
        filterGuest: false,
        search: null,
        holidays: [{
            id: "1",
            type:"Sick",
            title: "Corona",
            comment: "Hello, I have tested positive for Corona virus and therefore will not be in the workplace for the next 3 weeks at least",
            date:"12 May, 2021",
            status: true,
            status_date: "13 May, 2021"

        },
        {
            id: "2",
            type:"Holiday",
            title: "Vacation",
            comment: "Taking some days off",
            date:"12 March, 2021",
            status: true,
            status_date: "13 March, 2021"

        },
        {
            id: "3",
            type:"Holiday",
            title: "Corona",
            comment: "Going to Finland",
            date:"12 May, 2021",
            status: false,
            status_date: "13 May, 2021"

        },
        {
            id: "4",
            type:"Business Trip",
            title: "Conference with colleagues in Stockholm",
            comment: "Going to Stockholm to attend the yearly PI Planning conference for a week",
            date:"21 May, 2021",
            status: false,
            status_date: "13 May, 2021"

        }],
        users: [
            {
                name:  "Signe",
                occupation: "Developer",
                country: "Sweden",
                mobile: "+45 283993424",
                laptop: "G3413485",
                usertype: "user",
                image : "https://randomuser.me/api/portraits/women/65.jpg"

            },
            {
                name:  "Anne",
                occupation: "Developer",
                country: "Sweden",
                mobile: "+45 283993424",
                laptop: "G3413485",
                usertype: "user",
                image : "https://randomuser.me/api/portraits/women/34.jpg"
                
            },
            {
                name:  "Daniel",
                occupation: "Developer",
                country: "Sweden",
                mobile: "+45 283993424",
                laptop: "G3413485",
                usertype: "user",
                image : "https://randomuser.me/api/portraits/men/9.jpg"
                
            },
            {
                name:  "Soren",
                occupation: "Developer",
                country: "Sweden",
                mobile: "+45 283993424",
                laptop: "G3413485",
                usertype: "user",
                image : "https://randomuser.me/api/portraits/men/78.jpg"
                
            },
            {
                name:  "Simon",
                occupation: "Developer",
                country: "Sweden",
                mobile: "+45 283993424",
                laptop: "G3413485",
                usertype: "user",
                image : "https://randomuser.me/api/portraits/men/67.jpg"
                
            },
            {
                name:  "Signe",
                occupation: "Developer",
                country: "Sweden",
                mobile: "+45 283993424",
                laptop: "G3413485",
                usertype: "user",
                image : "https://randomuser.me/api/portraits/women/52.jpg"
                
            }
        ],
    }

    const [state, dispatch] = useReducer(HolidayReducer, initialState)

    const addHoliday = (holiday) => {
        holiday.id = Date.now();
        holiday.status = false;
        dispatch ({
            type: ADD_HOLIDAY,
            payload: holiday
        })
    }

    const removeHoliday = (id) => {
        dispatch ({
            type: REMOVE_HOLIDAY,
            payload: id
        })
    }
    
    const toggleFilter = () => {
        dispatch({
            type: TOGGLE_FILTER,

        })
    }

    const searchUser = (user) => {
        dispatch ({
            type: SEARCH_USER,
            payload: user
        })
    }
   

    const clearSearch = () => {
        dispatch ({
        type: CLEAR_SEARCH,
        })

    }

    const approveHoliday = (holiday) => {
        holiday.status = true;
        dispatch ({
            type: APPROVE_HOLIDAY,
            payload: holiday
        })
    }

    
    return (
        <HolidayContext.Provider value={{
            holidays: state.holidays,
            filterGuest: state.filterGuest,
            users: state.users,
            search: state.search,
            toggleFilter,
            searchUser,
            clearSearch,
            addHoliday,
            removeHoliday,
            approveHoliday,
        }}>{props.children}</HolidayContext.Provider>

    )
}
export default HolidayState

