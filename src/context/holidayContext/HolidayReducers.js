import {
    TOGGLE_FILTER,
    CLEAR_SEARCH, 
    SEARCH_USER,
    ADD_HOLIDAY,
    REMOVE_HOLIDAY,

} from '../types'

export default (state, {type, payload}) => {
    switch (type) {
    
        case ADD_HOLIDAY:
            return {
                ...state,
                holidays:[...state.holidays, payload]
            }
        case REMOVE_HOLIDAY :
            return {
                ...state,
                holidays: state.holidays.filter(holiday => holiday.id !== payload)
            }
        case SEARCH_USER:
            const reg = new RegExp(`${payload}`, 'gi')
            return {
                ...state,
                search:state.users.filter(user => user.name.match(reg))
            }
        case CLEAR_SEARCH :
            return {
                ...state,
                search :null
            }
        case TOGGLE_FILTER :
            return {
                ...state,
                filterGuest: !state.filterGuest
            }

        default:
            return state
    }

}