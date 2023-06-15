
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './UserAction';
import "../styles/Login.css";

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email
        };

        dispatch(addUser(newUser));

        setName('');
        setEmail('');
    };

    return (
        <div className='introduction'>
            <h1 class="heading">User Login</h1>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>

    );
};

export default Login;
