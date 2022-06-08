import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='review'>My Reviews</Link></li>
                    <li><Link to='history'>My History</Link></li>
                    {admin && <>
                        <li><Link to='users'>All Users</Link></li>
                        <li><Link to='addDoctor'>Add Doctor</Link></li>
                        <li><Link to='manageDoctor'>Manage Doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;