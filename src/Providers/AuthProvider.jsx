import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import axios from 'axios';



const provider = new GoogleAuthProvider();

export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (info) => {
        return updateProfile(auth.currentUser, info)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        setLoading(false)
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false)
                    })
            }

        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        createUser,
        signInUser,
        signInUserWithGoogle,
        signoutUser,
        updateUserProfile,
        user,
        loading
    }
    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;