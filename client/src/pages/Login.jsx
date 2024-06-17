import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../services/ServiceWorkers';

export default function Login() {
    const initialState = { gmail: "" };
    const [userDetails, setUserDetails] = useState(initialState);
    const nav = useNavigate();

    const handleEmailLogin = (e) => {
        e.preventDefault();
        
        if (!(validator.isEmail(userDetails.gmail.trim()))) {
            console.log("Invalid Email");
            return
        }

        getUserDetails(userDetails)
            .then((response) => {
                if (response.message === "Login Successful") {
                    nav('/home');
                    setUserDetails(initialState);
                }
            }).catch((e) => {
                console.log(e.message);
            })
    }

    return (
        <Fragment>
            <h3>Welcome Back</h3>
            <form onSubmit={handleEmailLogin}>
                <input type="email" name="gmail" id="gmail" onChange={(e) => setUserDetails(e.target.value)} placeholder='Email Address' required />
                <button type="submit">Continue</button>
                <p>Don't have an account<Link to="/signup">SignUp</Link></p>
            </form>
        </Fragment>
    )
}