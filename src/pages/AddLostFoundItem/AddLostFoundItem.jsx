import React, { useContext, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContex } from '../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddLostFoundItem = () => {
    const { user } = useContext(AuthContex)
    const [selectedDate, setSelectedDate] = useState(null); // State for selected date

    const handleSubmit = (e) => {
        e.preventDefault();

        // Access form data directly
        const form = e.target;
        const postType = form.postType.value;
        const thumbnail = form.thumbnail.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const dateLost = selectedDate ? selectedDate.toISOString().split("T")[0] : ""; // Get selected date in YYYY-MM-DD format
        const contactName = form.contactName.value;
        const contactEmail = form.contactEmail.value;

        const itemData = {
            postType,
            thumbnail,
            title,
            description,
            category,
            location,
            dateLost,
            contactName,
            contactEmail,
        };

        axios.post('http://localhost:5000/items', itemData)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Your item has been posted",
                        icon: "success",
                        draggable: true
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className="hero bg-base-200 py-20">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Add Found & Lost Item</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body lg:p-16">
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Post Type</label>
                            <select name="postType" className="w-full border border-gray-300 p-2 rounded">
                                <option value="Lost">Lost</option>
                                <option value="Found">Found</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Thumbnail URL</label>
                            <input
                                type="url"
                                name="thumbnail"
                                placeholder="Enter image URL"
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter title"
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Description</label>
                            <textarea
                                name="description"
                                placeholder="Enter description"
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="e.g., pets, documents, gadgets"
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Date Lost</label>
                            <DatePicker
                                className="w-full border border-gray-300 p-2 rounded"
                                selected={selectedDate}
                                onChange={(date) => {
                                    setSelectedDate(date); // Update selected date in state
                                }}
                                dateFormat="yyyy-MM-dd"
                            />
                            {/* Display the selected date in the input field */}
                            {/* <input
                                type="text"
                                name="dateLost"
                                value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
                                placeholder="Select date"
                                className="w-full border border-gray-300 p-2 rounded mt-2"
                                readOnly
                            /> */}
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Contact Information</label>
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    name="contactName"
                                    defaultValue={user?.displayName || ""}
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    readOnly
                                />
                                <input
                                    type="email"
                                    name="contactEmail"
                                    defaultValue={user?.email || ""}
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddLostFoundItem;