import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageMyItems = () => {
    const { user } = useContext(AuthContex)
    const [items, setItems] = useState([])
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/myItems/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    useEffect(() => {
        axiosSecure(`/myItems?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setItems(res.data)
            })
    }, [user?.email, handleDelete])

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 50,     // Offset from the viewport
        });
    }, []);

    return (
        <div className='w-[90%] mx-auto my-20 text-center'>
            <h1 className="text-5xl font-bold text-center my-6">Manage My Items</h1>
            <p className="w-[90%] lg:w-[80%] mx-auto">
                Easily report items you've lost or found by filling out the form. Provide details like the item’s title, description, category, and location, and upload an image or provide a URL. Whether you're searching for a lost item or helping someone recover theirs.
            </p>
            <div>
                <div className="overflow-x-auto my-10">
                    <table className="table bg-base-100 text-md text-center overflow-hidden">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) =>
                                    <tr data-aos="fade-left"
                                data-aos-delay={index * 200} key={index} className="hover overflow-hidden">
                                        <th>{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.location}</td>
                                        <td>{item.dateLost}</td>
                                        <td className='flex justify-evenly items-center'>
                                            <MdDeleteForever onClick={() => handleDelete(item._id)} className='cursor-pointer text-[#ec570d]' size={40} />
                                            <Link to={`/updateItems/${item._id}`} className='btn bg-[#ec570d] text-white btn-sm'>Update</Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    {
                        items.length < 1 ? <h1 className='text-5xl text-white font-bold'>You haven't added any item</h1> : <h1></h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageMyItems;