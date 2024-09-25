import React, { useEffect, useState } from 'react'
import { deleteUser, fetchUsers } from '../../service/UserServices';

export const UsersTable = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchUsers()
        .then(setUserList)
        .catch((e) => { 
            console.error("Error fetching user data", e)
        });
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
    
        if (!confirm(`Would you like to edit user: ${user.username}?`)) {
          // Cancel is clicked
            e.preventDefault();
            alert('Cancelled: User will NOT be edited!');
        } else {
          // Ok is clicked
            setEditMode(true);
        }
    };

    return (
        <>
            <table className='table table-bordered table-striped table-hover'>
                <thead className='thread'>
                    <th scope='col' className='table-th'>ID</th>
                    <th scope='col' className='table-th'>Username</th>
                    <th scope='col' className='table-th'>Email</th>
                    <th scope='col' className='table-th'>Profile Image #</th>
                    <th scope='col' className='table-th'>Cherry Score</th>
                    <th scope='col' className='table-th'>Role</th>
                    <th scope='col' className='modify-th'>Modify</th>
                </thead>
                <tbody>
                    {userList.map((userInList) => (
                        <tr key={userInList.id}>
                            <th scope='row'>{userInList.id}</th>
                            <th scope='row'>{userInList.username}</th>
                            <th scope='row'>{userInList.email}</th>
                            <th scope='row'>{userInList.profileImage}</th>
                            <th scope='row'>{userInList.cherryPoints}</th>
                            <th scope='row'>{userInList.role}</th>
                            <td className='table-data-buttons'>
                            <button 
                                className="submit-button" 
                                onClick={async (e) => 
                                    {if (!confirm(`Would you like to edit user: ${userInList.username}?`)) {
                                        // Cancel is clicked
                                            e.preventDefault();
                                            alert('Cancelled: User will NOT be edited!');
                                        } else {
                                        // Ok is clicked
                                            window.location.href = "/profile";
                                            setEditMode(true);
                                        }
                                    }
                                }>
                                Edit
                            </button>
                            <button
                                className="delete-button"
                                value={userInList.id}
                                onClick={async (e) => 
                                    {if (!confirm(`Are you sure you want to delete user: ${userInList.username}?`)) {
                                        // Cancel is clicked
                                            e.preventDefault();
                                            alert('Cancelled: User was NOT deleted!');
                                        } else {
                                        // Ok is clicked
                                            try {
                                            await deleteUser(userInList.id);
                                            alert(`${userInList.username} has been deleted!`);
                                            window.location.reload();
                                            } catch (error) {
                                            console.error('Failed to delete user!', error);
                                            throw error;
                                            }
                                        }
                                    }
                                }
                                >
                                Delete
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
