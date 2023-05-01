import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-300">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Italian Recipe</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        </div>
    );
};

export default Header;