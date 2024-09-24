import React, { useEffect, useState } from 'react';
import Navbar from "../navigation/Navbar";
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../service/UserServices';
import { UsersTable } from '../adminUser/UsersTable';

export const AdminDashboard = () => {
    const {user} = useAuth();
    const [userList, setUserList] = useState();

    useEffect(() => {
        fetchUsers()
        .then(setUserList)
        .catch((e) => { 
            console.error("Error fetching user data", e)
        });
    }, []);

    // TODO: refactor and add code to edit and delete user from ProfileInfoCard

    if (user !== null) {
        return (
            <>
                <Navbar/>

                <h1>Welcome, Admin {user.username}</h1>
                <br/>
                <div className='admin-tables'>
                    <h3 className='admin-titles'>Manage Users</h3>
                    <br/>
                    <UsersTable props={userList}/>
                </div>
                <div>
                    <h3>Manage Categories</h3>
                </div>
                <div>
                    <h3>Manage Locations</h3>
                </div>
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
