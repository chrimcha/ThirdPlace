import React from 'react'

export const UsersTable = ({props}) => {

    // TODO: make this component a complete table, then refactor Admin Dashboard to clean up and use this component

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
                <thead>
                    <th scope='col'>ID</th>
                    <th scope='col'>Username</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Profile Image #</th>
                    <th scope='col'>Cherry Score</th>
                    <th scope='col'>Role</th>
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
        </>
    );
};
