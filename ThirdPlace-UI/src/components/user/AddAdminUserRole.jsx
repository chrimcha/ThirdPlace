import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export const AddAdminUserRole = () => {
    const {user} = useAuth();
    const [adminRole, setAdminRole] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // await changeRoleToAdmin(username, email, password);
            // window.location.reload(); // Reload to update context
            setError('');
            // alert(`Role has been changed to: Admin`);
            // window.location.href = "/";
        } catch (error) {
            setError('Failed to login. Please try again!');
        }

    };

    return (
        <>
        
        <div className='review-card'>
            <form >
                <div className="form-group">
                    <label className="form-label">
                        Enter password to change role to Admin
                        <br/>
                        <br/>
                        <input 
                        type='text'
                        className="form-control"
                        name='password'
                        autoComplete='off'
                        value={adminRole}
                        onChange={(e) => setAdminRole(e.target.value)}
                        required
                        />
                    </label>
                    <br/>
                    <button type="submit" className="submit-button-register">
                    Submit
                </button>
                </div>
            </form>
        </div>
        
        </>
    )
}
