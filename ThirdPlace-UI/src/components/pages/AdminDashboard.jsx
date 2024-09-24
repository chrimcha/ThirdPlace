import React from 'react';
import Navbar from "../navigation/Navbar";
import { useAuth } from '../../context/AuthContext';
import { AddAdminUserRole } from '../user/AddAdminUserRole';

export const AdminDashboard = () => {
    const {user} = useAuth();

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
}
