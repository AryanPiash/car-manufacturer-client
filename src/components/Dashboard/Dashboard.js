import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl text-orange-400 font-semibold'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard/review'>Reviews</Link></li>
                    {user && <>
                        <li><Link to='/dashboard/clients'>All Clients</Link></li>
                        <li><Link to='/dashboard/addOrder'>Add Order</Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage Orders</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;