 /* eslint-disable */ 
 import React, {useContext} from 'react';
 import AuthContext from '../../../context/authContext/authContext.js';
 import { Route, Redirect } from 'react-router-dom'
 
 const AdminRoute = ({ component : Component , ...rest }) => {
 
     const { adminAuth } = useContext(AuthContext);
 
     return (
 <Route
 {...rest}
 render={props => !adminAuth ? (<Redirect to='/login'/>) : (<Component {...props} />)}
 />
     )
 }
 
 export default AdminRoute