import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='grid justify-items-center gap-10 my-10'>
            {
                    user ? 
                    <>
                        <span>{user.displayName ? user.displayName: user.email}</span>
                        <img className="w-10 rounded-full border bottom-2" src={user.photoURL ? user.photoURL: null}/>
                        <Link className="btn btn-primary normal-case text-xl" to='/'>Go Home</Link>
                    </>:
                        <Link className="btn btn-primary normal-case text-xl" to='/'>Go Home</Link>
                }
        </div>
    );
};

export default Profile;