import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, updateUserProfile, signInUserWithGoogle } = useContext(AuthContex)
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleGoogleSignin = () => {
        signInUserWithGoogle()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Register successfull',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
                    .catch((error) => {
                        const errorMessage = error.message;
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${errorMessage}`,
                            footer: 'Please try again'
                        })
                    });
            })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (!/[A-Z]/.test(password)) {
            return (Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Must have an Uppercase letter in the password",
                footer: 'Please try again'
            }))
        }
        if (!/[a-z]/.test(password)) {
            return (Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Must have a Lowercase letter in the password",
                footer: 'Please try again'
            })
            )
        }

        if (password.length < 6) {
            return (Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Length must be at least 6 character ",
                footer: 'Please try again'
            })
            )
        }

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateUserProfile({ displayName: name, photoURL: photo })
                Swal.fire({
                    title: 'Success!',
                    text: 'Register successfull',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}`,
                    footer: 'Please try again'
                })
            });
    }
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-20  dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="w-[90%] mx-auto md:w-full max-w-3xl px-5 py-10 md:p-12 bg-white rounded-lg shadow-md  dark:bg-[#0C1935] text-gray-900 dark:text-gray-100">
                <div className='text-center'>
                    <div className="btn btn-ghost nav-logo text-xl lg:text-2xl font-extrabold  mb-10"> <p>WhereIsIt</p> </div>
                    <h2 className='text-4xl font-semibold'>REGISTER</h2>
                </div>
                <div className='bg-gray-200  py-1 md:py-3 mx-1 md:mx-8 my-10 text-center rounded-xl cursor-pointer text-gray-600' onClick={handleGoogleSignin}> <FcGoogle size={40} className='inline-block' /> Signin With Google</div>
                <div className="divider">OR</div>
                <div>
                    <form className="card-body px-1 md:px-6" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text dark:text-gray-100">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input bg-gray-50 input-bordered dark:text-gray-900" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="bg-gray-50 input input-bordered dark:text-gray-900" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="bg-gray-50 input input-bordered dark:text-gray-900" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text dark:text-gray-100">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="bg-gray-50 input input-bordered dark:text-gray-900" required />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 top-8 flex items-center pr-3 text-gray-500">
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-[#1d22b8] dark:bg-[#f0f647] dark:text-black border-none text-white ">Register</button>
                        </div>
                    </form>
                    <p className='text-center text-gray-600 dark:text-gray-400'>Already have an account? <Link to={'/login'} className='font-semibold ml-2 dark:text-gray-400'> Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;