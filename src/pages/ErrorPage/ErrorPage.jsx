import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen gap-10'>
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl text-gray-700 mt-4">Oops! Page not found.</p>
                <Link className=' px-6 btn btn-primary py-3 rounded-xl font-medium' to={'/'}>Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;