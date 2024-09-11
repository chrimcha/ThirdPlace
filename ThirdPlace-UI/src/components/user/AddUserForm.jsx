import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../service/UserServices';
import { useAuth } from '../../context/AuthContext';

const AddUserForm = () => {
    const { user, isAuthenticated } = useAuth();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [verifyEmail, setVerifyEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await registerUser(username, email, verifyEmail, password, verifyPassword);
            setError("");
            alert("User was successfully created! Please log in.")
            navigate('/login', { user, isAuthenticated });
        } catch (error) {
            setError("User was not registered. Please try again.");
        }

    };

    return (
        <>
            {error ? <div className="alert alert-danger">{error}</div> : ""}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">
                        Username
                        <input
                        type="text"
                        className="form-control"
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                    </label >
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Email
                        <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Verify Email
                        <input
                        type="email"
                        className="form-control"
                        name='verifyEmail'
                        value={verifyEmail}
                        onChange={(e) => setVerifyEmail(e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Password
                        <input
                        type={
                            showPassword ? "text" : "password"
                        }
                        className="form-control"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Verify Password
                        <input
                        type={
                            showPassword ? "text" : "password"
                        }
                        className="form-control"
                        name='verifyPassword'
                        value={verifyPassword}
                        onChange={(e) => setVerifyPassword(e.target.value)}
                        required
                        />
                    </label>
                    <br />
                    <label>
                        <small className='register'>Show Passwords</small>
                        <input
                            name="check"
                            type="checkbox"
                            value={showPassword}
                            onChange={() =>
                                setShowPassword((prev) => !prev)
                            }
                            />
                    </label>
                </div>

                <button type="submit" className="submit-button-register">
                    Register
                </button>
            </form>

            <p>Already have an account? <Link className='link-css-login-register' to="/Login">Login</Link></p>
        </>
    )
}

export default AddUserForm;