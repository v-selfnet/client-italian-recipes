import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

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
                <Link className="btn btn-ghost normal-case text-xl">
                    <ActiveLink to='/'>Home</ActiveLink>
                </Link>
                <Link className="btn btn-ghost normal-case text-xl">
                    <ActiveLink to='/blog'>Blog</ActiveLink>
                </Link>
                <Link className="btn btn-ghost normal-case text-xl">
                    <ActiveLink to='/profile'>Profile</ActiveLink>
                </Link>
            </div>
            
            <div>
                {
                    user ? 
                    <>
                        <span>{user.displayName ? user.displayName: user.email}</span>
                        <img className="w-10 rounded-full ml-5 border bottom-2" src={user.photoURL ? user.photoURL: null}/>
                        <Link onClick={handelSignout} className="btn btn-ghost normal-case text-xl" to='/login'>Signout</Link>
                    </>:
                        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;