import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router-dom';
import { AuthContex } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const PostDetails = () => {

    const _id = useParams()
    const [post, setpost] = useState({})
    const [isLost, setIsLost] = useState(false)
    const { postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail, status } = post
    const [isOpen, setIsOpen] = useState(false);
    const [recoveredDate, setRecoveredDate] = useState(null);
    const [recoveredLocation, setRecoveredLocation] = useState("");
    const { user } = useContext(AuthContex)

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleSubmit = () => {
        const recoveryDetails = {
            recoveryLocation: recoveredLocation,
            recoveryDate: recoveredDate,
            recoveredBy: {
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            },
            postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail
        };

        if (!status) {
            axios.post(`http://localhost:5000/items/${_id.id}`, recoveryDetails)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "Your recovery details has been saved",
                            icon: "success",
                            draggable: true
                        })
                    }
                    console.log(res.data)
                })
        }
        if(status){
            Swal.fire({
                title: "Already recovered this item",
                icon: "error",
                draggable: true
            })
        }

        closeModal(); // Close the modal after submission

    };
    useEffect(() => {
        axios.get(`http://localhost:5000/items/${_id.id}`)
            .then(res => {
                setpost(res.data)
            })
    }, [handleSubmit])

    useEffect(() => {
        if (postType === 'Lost') {
            setIsLost(true)
        }
    }, [postType])

    return (
        <div className='w-[90%] mx-auto my-20 text-center'>
            <h1 className='text-5xl font-bold text-center my-6'>{title}</h1>
            <p className=' w-[90%] lg:w-[80%] mx-auto '>
                {
                    isLost ?
                        <p>
                            This page provides detailed information about a specific lost item reported by a user. It includes the item's title, description, category, date it was lost, and the location where it was last seen. An image or thumbnail of the item is also displayed to help with identification. Contact information is available for reaching out to the person who reported the item, allowing others to assist in its recovery.
                        </p>
                        :
                        <p>
                            This page showcases detailed information about an item that has been found and reported by a user. It features the item's title, description, category, date it was found, and the location where it was discovered. A clear image or thumbnail of the item is included to help identify it. Contact information of the person who found the item is provided, making it easy for the rightful owner to get in touch and reclaim their belongings.
                        </p>
                }
            </p>
            <div className="card lg:card-side xl:p-10 bg-base-100 shadow-xl mt-10">
                <figure>
                    <img className='rounded-2xl w-[80%] mx-auto'
                        src={thumbnail}
                        alt="Album" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title mb-10">{description}</h2>
                    <p>
                        {isLost ? 'Lost on' : 'Found on '} {location}
                    </p>
                    <p>Item Category: {category}</p>
                    <p> Date {isLost ? 'lost' : 'found'} : {dateLost} </p>
                    <p>Email: {contactEmail}</p>
                    <p>Name: {contactName}</p>
                    <p>Status: {status? " Already Recovered": " Not Recovered"}</p>
                    <div className="card-actions ">
                        <button onClick={openModal} className="btn w-full btn-primary">
                            {isLost ? "Found This!" : "This is Mine!"}
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Recovery Modal"
                className="bg-white w-full max-w-md mx-auto mt-20 rounded-lg shadow-lg p-6"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            >
                <h2 className="text-xl font-semibold mb-4">Recovery Details</h2>

                <div className="mb-4">
                    <label
                        htmlFor="recoveredLocation"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Recovered Location
                    </label>
                    <input
                        id="recoveredLocation"
                        type="text"
                        placeholder="Enter location"
                        value={recoveredLocation}
                        onChange={(e) => setRecoveredLocation(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="recoveredDate"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Recovered Date
                    </label>
                    <DatePicker
                        id="recoveredDate"
                        selected={recoveredDate}
                        onChange={(date) => setRecoveredDate(date)}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholderText="Select a date"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Recovered By
                    </label>
                    <div className="flex items-center space-x-4 mt-4">
                        <img
                            src={user?.photoURL}
                            alt="User"
                            className="w-12 h-12 rounded-full border"
                        />
                        <div>
                            <p className="text-sm font-medium">{user?.displayName}</p>
                            <p className="text-sm text-gray-600">{user?.email}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 btn btn-primary focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default PostDetails;