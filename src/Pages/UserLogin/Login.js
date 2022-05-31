import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle,
        googleUser,
        googleLoading,
        googleError] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth);

    const { register,
        formState: { errors },
        handleSubmit } = useForm();

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    useEffect((() => {
        if (googleUser || user) {
            navigate(from, { replace: true });
        }
    }), [googleUser, user, from, navigate]);

    if (googleLoading || loading) {
        return <Loading />
    }

    if (googleError || error) {
        signInError = <p className='text-red-500 mb-3'><small>{googleError?.message}{error?.message}</small></p>
    }

    const onSubmit = async data => {
        console.log(data);

        await signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-medium">Login</h2>
                    {/* {Login Form} */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Your Email is required"
                                    },
                                    pattern: {
                                        value: /[a-zA-Z0-9]{5}@[a-zA-Z0-9]{2,10}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Your Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>

                    {/* {navigate to sign up} */}
                    <p className='text-center'><small>New to Dentist Portal?
                        <Link to='/signup' className='text-secondary'> Create new account</Link></small></p>

                    {/* {divider} */}
                    <div className="divider">OR</div>

                    {/* {Social Log} */}
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-secondary"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;