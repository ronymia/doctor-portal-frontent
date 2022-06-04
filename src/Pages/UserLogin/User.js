import React from 'react';
import { signOut } from "firebase/auth";
import auth from '../../firebase.init';

const User = () => {

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" alt='avatar' />
                </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><button
                    onClick={() => handleSignOut()}
                    className="btn btn-ghost">Sign Out</button>
                </li>
            </ul>
        </div>

    );
};

export default User;