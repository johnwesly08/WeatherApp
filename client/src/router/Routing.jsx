import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Heading from '../components/Heading'
import Footers from '../components/Footers'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'

export default function Routing() {
    return (
        <Fragment>
            <BrowserRouter>
                <Heading />
                <Routes>
                    <Route path='/' index element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='*' element={<Error />} />
                </Routes>
                <Footers />
                <Outlet />
            </BrowserRouter>
        </Fragment>
    )
}
