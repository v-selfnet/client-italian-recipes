import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { user, createUser } = useContext(AuthContext);

    const [err, setErr] = useState([]);
    const [success, setSuccess] = useState([]);

    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        setErr('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                setSuccess('User Create Success!')
                form.reset();
                updateUserData(newUser, name, photo) // call update profile function
            })
            .catch(error => {
                setErr(error.message)
            })
    }

    // update user profile
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
            setSuccess('Update success')
        })
        .catch(error => setErr(error.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-20">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="your name" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" name="photo" className="input input-bordered file-input w-full" />

                            {/* Error & Success Message Handel */}
                            <label className="label">
                                <span className="label-text text-red-500">{err}</span>
                                <span className="label-text text-green-500">{success}</span>
                            </label>

                            <div className='flex justify-between'>
                                <label className="label">
                                    <p className="label-text-alt">Have an account?</p>
                                </label>
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Signin.</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;