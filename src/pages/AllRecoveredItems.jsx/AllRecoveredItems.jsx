import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import axios from 'axios';
import { MdTableRows } from 'react-icons/md';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { RiLayoutGrid2Line } from 'react-icons/ri';

const AllRecoveredItems = () => {
    const { user } = useContext(AuthContex)
    const [items, setItems] = useState([])
    const [tableFormet, setTableFormet] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:5000/recoveredItems?email=${user?.email}`)
            .then(res => setItems(res.data))
    }, [user])

    return (
        <div className='w-[90%] mx-auto my-20 text-center'>
            <h1 className="text-5xl font-bold text-center my-6">All Recovered Items</h1>
            <p className="w-[90%] lg:w-[80%] mx-auto">
                Easily report items you've lost or found by filling out the form. Provide details like the item’s title, description, category, and location, and upload an image or provide a URL. Whether you're searching for a lost item or helping someone recover theirs.
            </p>
            <div>
                <div className='flex items-center justify-end gap-5'>
                    <RiLayoutGrid2Line onClick={() => setTableFormet(false)} size={50} className={ tableFormet? `p-2 rounded-full border border-gray-700 cursor-pointer`:'cursor-pointer text-white bg-gray-700 p-2 rounded-full'} />
                    <MdTableRows onClick={() => setTableFormet(true)} size={50} className={ tableFormet? `cursor-pointer text-white bg-gray-700 p-2 rounded-full `:'p-2 rounded-full border border-gray-700 cursor-pointer'} />
                </div>
                <div>
                    {
                        tableFormet ?
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
                            :
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-20 my-10'>
                                {
                                    items.map(item =>
                                        <div key={item._id} className="card glass">
                                            <figure>
                                                <img className='h-[250px] w-full lg:h-[280px] xl:h-[350px]'
                                                    src={item.thumbnail}
                                                    alt="thumbnail" />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{item.title}</h2>
                                                <p className='text-left'>{item.description}</p>
                                                <p className='text-left'> {item.dateLost} </p>
                                                <p className="text-left">Recovered By: {item.recoveredBy.name}</p>
                                                <p className="text-left">Recovery Date: {item.recoveryDate}</p>
                                                <p className="text-left">Recovery Location: {item.recoveryLocation}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                    }
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