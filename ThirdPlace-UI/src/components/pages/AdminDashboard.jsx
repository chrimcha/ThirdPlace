import React, { useEffect, useState } from 'react';
import Navbar from "../navigation/Navbar";
import { useAuth } from '../../context/AuthContext';
import { AddAdminUserRole } from '../adminUser/AddAdminUserRole';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../service/UserServices';

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

                {user.role == "Admin" ? (
                    <>
                        <h1>Welcome, Admin {user.username}</h1>
                        <br/>
                        <div className='admin-tables'>
                            <h3 className='admin-titles'>Manage Users</h3>
                            <br/>
                            <table className='table table-bordered table-striped table-hover'>
                                <thead className='thread'>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Username</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Profile Image #</th>
                                    <th scope='col'>Cherry Score</th>
                                    <th scope='col'>Role</th>
                                    <th scope='col' className='table-data-buttons'>Modify</th>
                                </thead>
                                <tbody>
                                    {userList.map((userInList) => (
                                        <tr key={userInList.id}>
                                            <th scope='row' className='table-data'>{userInList.id}</th>
                                            <th scope='row' className='table-data'>{userInList.username}</th>
                                            <th scope='row' className='table-data'>{userInList.email}</th>
                                            <th scope='row' className='table-data'>{userInList.profileImage}</th>
                                            <th scope='row' className='table-data'>{userInList.cherryPoints}</th>
                                            <th scope='row' className='table-data'>{userInList.role}</th>
                                            <td className='table-data-buttons'>
                                                <button className="submit-button" onClick={() => deleteTodo(todo.id)}>
                                                Edit
                                                </button>
                                                <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
                                                Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h3>Manage Categories</h3>
                        </div>
                        <div>
                            <h3>Manage Locations</h3>
                        </div>
                    </>
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
