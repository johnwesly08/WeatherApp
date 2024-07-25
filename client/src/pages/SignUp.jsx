import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import { signUpWithGmail, signUpWithGoogle } from '../services/ServiceWorkers';

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


        const handleGoogleSignUp = async (tokenResponse) => {
            try {
                const response = await signUpWithGoogle(tokenResponse.credential);
                console.log('User signed up with Google:', response);
            } catch (error) {
                setError(error.message);
            }
        };
    }

    return (
        <Fragment>
            <h3>Create an Account</h3>
            <form onSubmit={handleGmailSubmit}>
                <input type="email" name="gmail" id="gmail" onChange={(e) => setUserDetails(e.target.value)} placeholder='Email Address' required />
                <button type="submit">Continue</button>
                <p>Already have an account<Link to="/login">Login</Link></p>
            </form>

            <GoogleOAuthProvider clientId='#'>
                <div>
                    <form onSubmit={handleGoogleSignUp}>
                        <input type="email" name="ggmail" id="ggmail" onChange={(e) => setUserDetails(e.target.value)} placeholder='Enter your Email' required />
                        <button type="submit">Sign Up</button>
                    </form>


                    <GoogleLogin
                        onSuccess={handleGoogleSignUp}
                        onError={(error) => console.error('Error with Google login:', error)}
                    />|
                </div>
            </GoogleOAuthProvider>
        </Fragment>
    )
}