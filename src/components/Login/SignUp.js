import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import LoadingSpinner from '../Shared/LoadingSpinner';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const token = useToken(user || gUser)

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email,data.password)
        await updateProfile({ displayName: data.name });
    };

    if(loading || gLoading || updating){
        return <LoadingSpinner></LoadingSpinner>
    }

    if (token) {
        navigate('/')
    }

    

    let signInError;
    if(error || gError || updateError){
        signInError = <p className='text-red-500 mb-2'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }
    return (
        <div>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-semibold uppercase">Sign Up</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label py-0">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-400 pt-2">{errors.name.message}</span>}
                                    
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label py-0">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-400 pt-2">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400 pt-2">{errors.email.message}</span>}

                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 character or more'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-400">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.password.message}</span>}

                                </label>
                            </div>
                            {signInError}

                            <input className='btn btn-secondary w-full mx-w-xs text-white' type="submit" value='Sign up' />
                            <p className='text-center mt-2'><small>Already Have an Account? <Link className='text-secondary font-semibold' to='/login'>Please Login</Link></small></p>
                        </form>

                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-secondary">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;