 /* eslint-disable */ 
import React, {useState, useContext, useEffect} from 'react';
import AuthContext from '../../context/authContext/authContext.js'
import {Link, useHistory} from 'react-router-dom';



const Register = (props) => {

    const {registerUser, userAuth, errors} = useContext(AuthContext);

    useEffect (() => {
        if(userAuth) {
            props.history.push('/members')
        }
    }, [userAuth, props.history])



    const [user, setUser] = useState({
        name: '',
        email:  '',
        password: '',
        occupation : '',
        country : '',
        mobile : '',
        laptop : ''
    })

    const {name, password, email, occupation, country, mobile, laptop} = user

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    }

    const submit = e => {
        e.preventDefault();
        registerUser(user);
        console.log("sent")
       console.log(user);
       setUser({
        name: '',
        email:  '',
        password: '',
        occupation : '',
        country : '',
        mobile : '',
        laptop : ''
       })
    }

    return (
        <div className="register">
            <h1>Sign Up</h1>
            <form onSubmit={submit} className="loginForm">
                <input type="text" name="name" placeholder="name surname" value={name} onChange={handleChange}></input>
                <input type="email" name="email" type="email" placeholder="email" value={email} onChange={handleChange}></input>
                <input type="password" name="password" placeholder="password" value={password} onChange={handleChange}></input>
                <input type="text" name="occupation" placeholder="job title" value={occupation} onChange={handleChange}></input>
                <input type="text" name="country" type="text" placeholder="country" value={country} onChange={handleChange}></input>
                <input type="text" name="mobile" placeholder="mobile" value={mobile} onChange={handleChange}></input>
                <input type="text" name="laptop" placeholder="laptop" value={laptop} onChange={handleChange}></input>
                <input type="submit" value="Sign Up" class="buttonSign"></input>
            </form>
            <div className="question">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}
export default Register