import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <Link className="mx-4" to="/">Products</Link>
            <Link className="mx-4" to="/day2">Day2</Link>
            <Link className="mx-4" to="/day3">Day3</Link>
        </nav>
    );
};

export default Navbar;
