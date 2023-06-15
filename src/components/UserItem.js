// UserList.js

import React from 'react';
import { useSelector } from 'react-redux';

const UserItem = () => {
    const users = useSelector((state) => state.users);

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <h1>Welcome {user.name}</h1>
                    {/* <p>Email - {user.email}</p> */}
                </li>
            ))}
        </ul>
    );
};

export default UserItem;
