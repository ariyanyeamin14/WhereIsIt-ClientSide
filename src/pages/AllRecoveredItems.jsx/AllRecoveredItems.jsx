import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import axios from 'axios';

const AllRecoveredItems = () => {
    const {user} = useContext(AuthContex)
    const [items, setItems] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:5000/recoveredItems?email=${user?.email}`)
            .then(res=> setItems(res.data))
    }, [user])
    return (
        <div className='w-[90%] mx-auto my-20 text-center'>
            <h1 className="text-5xl font-bold text-center my-6">All Recovered Items</h1>
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
                                <th>Recovered By</th>
                                <th>Recovery Date</th>
                                <th>Recovery Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) =>
                                    <tr key={index} className="hover">
                                        <th>{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.recoveredBy.name}</td>
                                        <td>{item.recoveryDate}</td>
                                        <td>{item.recoveryLocation}</td>
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

export default AllRecoveredItems;