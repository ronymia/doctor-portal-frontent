import React from 'react';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Signup = () => {
    const [signInWithGoogle,
        googleUser,
        googleLoading,
        googleError] = useSignInWithGoogle(auth);

    const [createUserWithEmailAndPassword,
        user,
        loading,
        error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile,
        updating,
        updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || googleUser);

    const { register,
        formState: { errors },
        handleSubmit } = useForm();

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    if (googleLoading || loading || updating) {
        return <Loading />
    }

    if (googleError || error || updateError) {
        signInError = <p className='text-red-500 mb-3'><small>{googleError?.message}{error?.message} {updateError?.message}</small></p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile(data.name);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-medium">Sign Up</h2>
                    {/* {Login Form} */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Your Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
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
                                {...register("specialty", {
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
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign in" />
                    </form>

                    {/* {navigate to sign in} */}
                    <p className='text-center'><small>Already have an Account?
                        <Link to='/login' className='text-secondary'> Login here</Link></small></p>

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

export default Signup;