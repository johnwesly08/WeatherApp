import React, { Fragment, useState } from 'react'
import { signUpWithGmail } from '../services/ServiceWorkers';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const initialState = { gmail: "" };
    const [userDetails, setUserDetails] = useState(initialState);
    const nav = useNavigate();

    const handleGmailSubmit = (e) => {
        e.preventDefault();

        if (!(validator.isEmail(userDetails.gmail.trim()))) {
            console.log("Invalid Email");
            return
        }

        signUpWithGmail(userDetails)
            .then((response) => {
                if (response.message === "User registered successfully") {
                    nav('/login');
                    setUserDetails(initialState)
                }
            }).catch((e) =>
                console.log(e.message)
            );
    }

    return (
        <Fragment>
            <h3>Create an Account</h3>
            <form onSubmit={handleGmailSubmit}>
                <input type="email" name="gmail" id="gmail" onChange={(e) => setUserDetails(e.target.value)} placeholder='Email Address' required />
                <button type="submit">Continue</button>
                <p>Already have an account<Link to="/login">Login</Link></p>
            </form>
        </Fragment>
    )
}