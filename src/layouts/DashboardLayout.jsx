import React from 'react';
import { Link, Outlet } from 'react-router';

export default function DashboardLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <nav className="bg-blue-100 shadow-md">
                <ul className="flex gap-6 px-8 py-4 justify-center">
                    <li>
                        <Link to="/dashboard" className="text-gray-700 font-semibold hover:text-blue-600 transition">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/users" className="text-gray-700 font-semibold hover:text-blue-600 transition">Users</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/settings" className="text-gray-700 font-semibold hover:text-blue-600 transition">Settings</Link>
                    </li>
                </ul>
            </nav>
            <main className="flex-1 flex items-center justify-center px-4">
                <Outlet />
            </main>
            <footer className="bg-blue-100 text-center py-4 mt-auto shadow-inner">
                <p className="text-gray-600">&copy; 2023 Dashboard</p>
            </footer>
        </div>
    );
}
