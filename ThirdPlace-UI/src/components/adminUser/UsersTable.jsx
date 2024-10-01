import React from 'react'

export const UsersTable = ({props}) => {

    const userList = props;

    // const [userList, setUserList] = useState();

    // useEffect(() => {
    //     fetchUsers()
    //     .then(setUserList)
    //     .catch((e) => { 
    //         console.error("Error fetching user data", e)
    //     });
    // }, []);

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
        </>
    );
};
