import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageMyItems = () => {
    const { user } = useContext(AuthContex)
    const [items, setItems] = useState([])

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
        axios(`http://localhost:5000/myItems?email=${user?.email}`)
            .then(res => {
                setItems(res.data)
            })
    }, [user?.email, handleDelete])

    return (
        <div className='w-[90%] mx-auto my-20 text-center'>
            <h1 className="text-5xl font-bold text-center my-6">Manage My Items</h1>
            <p className="w-[90%] lg:w-[80%] mx-auto">
                Easily report items you've lost or found by filling out the form. Provide details like the item’s title, description, category, and location, and upload an image or provide a URL. Whether you're searching for a lost item or helping someone recover theirs.
            </p>
            <div>
                <div className="overflow-x-auto my-10">
                    <table className="table bg-base-100 text-md text-center">
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
                                    <tr key={index} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.location}</td>
                                        <td>{item.dateLost}</td>
                                        <td className='flex justify-evenly items-center'>
                                            <MdDeleteForever onClick={() => handleDelete(item._id)} className='cursor-pointer' color='blue' size={40} />
                                            <Link to={`/updateItems/${item._id}`} className='btn btn-primary btn-sm'>Update</Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    {
                        items.length < 1 ? <h1 className='text-3xl text-red-900 font-bold'>You haven't added any item</h1> : <h1></h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageMyItems;