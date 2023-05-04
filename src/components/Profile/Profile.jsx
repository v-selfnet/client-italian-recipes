import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {
                    user ? 
                    <>
                        <span>{user.displayName ? user.displayName: user.email}</span>
                        <img className="w-10 rounded-full ml-5 border bottom-2" src={user.photoURL ? user.photoURL: null}/>
                    </>:
                        <Link className="btn btn-ghost normal-case text-xl" to='/'>Go</Link>
                }
        </div>
    );
};

export default Profile;