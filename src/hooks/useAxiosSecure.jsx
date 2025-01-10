import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';

const axiosInstance = axios.create({
    baseURL: 'https://where-is-it-server-side.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { signoutUser } = useContext(AuthContex)
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if(error.status === 401 || error.status === 403){
                signoutUser()
                .then(() => {
                    navigate('/login')
                })
            }
            return Promise.reject(error)
        }
    )
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;