import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)

    const [err, setErr] = useState([]);
    const [success, setSuccess] = useState([]);

    const from = location.state?.from?.pathname || '/';

    // email password login
    const handelSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setErr('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user.email;
                setSuccess('Login Success!', loggedUser)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setErr(error.message)
            })

    }

    // google login
    const handelGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error.message))
    }

    // github login
    const handelGithubLogin = () => {
        githubLogin()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-3xl font-bold">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            {/* Error & Success Message Handel */}
                            <label className="label">
                                <span className="label-text text-red-500">{err}</span>
                                <span className="label-text text-green-500">{success}</span>
                            </label>

                            <div className='flex justify-between'>
                                <label className="label">
                                    <p className="label-text-alt">Do not have an account?</p>
                                </label>
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link link-hover">Register.</Link>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        <hr />
                        <div className="form-control mt-6">
                            <button onClick={handelGoogleLogin} className="btn btn-outline btn-xs">Signin with Google</button>
                        </div>
                        <div onClick={handelGithubLogin} className="form-control mt-6">
                            <button className="btn btn-outline btn-xs">Signin with Github</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;