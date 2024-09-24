import React, { useEffect } from 'react';
import Navbar from "../navigation/Navbar";
import { useAuth } from '../../context/AuthContext';
import { AddAdminUserRole } from '../user/AddAdminUserRole';
import { Link } from 'react-router-dom';

export const AdminDashboard = () => {
    const {user} = useAuth();

    if (user !== null) {
        return (
            <>
                <Navbar/>

                {user.role == "Admin" ? (
                    <h1>Welcome, Admin {user.username}</h1>
                ) : (
                    <>
                        <h1 className="alert alert-danger">Must have Admin role to access.</h1>
                        <AddAdminUserRole/>
                    </>
                )}
            </>
    
        )
    } else {
        return (
            <>
                <Navbar/>
                <section className='review-card-no-user-profile-submit-location'>
                    <h1>Log in to see Dashboard!</h1>
                    <br />
                    <p>
                        <Link className="link-css-login-register" to={{ pathname: '/login', state: { user }}}>Go to Login</Link>
                    </p>
                </section>
            </>
        )
    }
}
