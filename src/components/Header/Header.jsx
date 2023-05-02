import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log(user);
    const handelSignout = () => {
        logOut()
        .then( () => console.log('Sign out success'))
        .catch(error => console.error(error.message))
    }

    return (
        <div className="navbar bg-base-300 justify-between">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Italian Recipe</Link>
            <div>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
            </div>
            
            <div>
                {
                    user ? 
                    <>
                        <span>{user.displayName}</span>
                        <img className="w-10 rounded-full ml-5" src={user.photoURL} />
                        <Link onClick={handelSignout} className="btn btn-ghost normal-case text-xl" to='/login'>Signout</Link>
                    </>:
                        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;