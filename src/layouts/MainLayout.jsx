import React from 'react'
import { Link, Outlet } from 'react-router'

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <nav className="bg-amber-100 shadow-md">
                <ul className="flex gap-6 px-8 py-4 justify-center">
                    <li>
                        <Link to="/" className="text-gray-700 font-semibold hover:text-amber-600 transition">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-700 font-semibold hover:text-amber-600 transition">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-700 font-semibold hover:text-amber-600 transition">Contact</Link>
                    </li>
                </ul>
            </nav>
            <main className="flex-1 flex items-center justify-center px-4">
                <Outlet />
            </main>
            <footer className="bg-amber-100 text-center py-4 mt-auto shadow-inner">
                <p className="text-gray-600">&copy; 2023 My Website</p>
            </footer>
        </div>
    )
}
