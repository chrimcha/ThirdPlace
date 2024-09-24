import React, { useState } from 'react'
import { changeRoleToAdmin } from '../../service/UserServices';

export const AddAdminUserRole = () => {
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await changeRoleToAdmin(password);
            window.location.reload(); // Reload to update context
            setError('');
            alert(`Role has been changed to: Admin`);
        } catch (error) {
            setError('Password incorrect. Please try again!');
        }

    };

    return (
        <>
        
        <div className='review-card'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">
                        Enter password to change role to Admin
                        <br/>
                        <br/>
                        <input 
                        type='password'
                        className="form-control"
                        name='password'
                        autoComplete='off'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </label>
                    <p>{error}</p>
                    <button type="submit" className="submit-button-register">
                    Change Role
                </button>
                </div>
            </form>
        </div>
        
        </>
    )
}
