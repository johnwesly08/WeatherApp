import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <Fragment>
            <div className="dash">
                <h3>Welcome to the Weather App</h3>
                <div className="btns">
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                    <button>
                        <Link to="/signup">SignUp</Link>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}