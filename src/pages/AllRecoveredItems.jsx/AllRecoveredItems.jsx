import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import axios from 'axios';
import { MdTableRows } from 'react-icons/md';
import { RiLayoutGrid2Line } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllRecoveredItems = () => {
    const { user } = useContext(AuthContex)
    const [items, setItems] = useState([])
    const [tableFormet, setTableFormet] = useState(true)

    useEffect(() => {
        axios.get(`https://where-is-it-server-side.vercel.app/recoveredItems?email=${user?.email}`, { withCredentials: true })
            .then(res => setItems(res.data))
    }, [user])

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 50,     // Offset from the viewport
        });
    }, []);

    return (
        <div className='w-[90%] mx-auto my-20 text-center'>
            <h1 className="text-5xl font-bold text-center my-6">All Recovered Items</h1>
            <p className="w-[90%] lg:w-[80%] mx-auto">
                Easily report items you've lost or found by filling out the form. Provide details like the item’s title, description, category, and location, and upload an image or provide a URL. Whether you're searching for a lost item or helping someone recover theirs.
            </p>
            <div>
                <div className='flex items-center justify-end gap-5'>
                    <RiLayoutGrid2Line onClick={() => setTableFormet(false)} size={50} className={tableFormet ? `p-2 rounded-full border border-gray-700 cursor-pointer` : 'cursor-pointer text-white bg-[#ec570d] p-2 rounded-full'} />
                    <MdTableRows onClick={() => setTableFormet(true)} size={50} className={tableFormet ? `cursor-pointer text-white bg-[#ec570d] p-2 rounded-full ` : 'p-2 rounded-full border border-gray-700 cursor-pointer'} />
                </div>
                <div>
                    {
                        tableFormet ?
                            <div className="overflow-x-auto my-10">
                                <table className="table bg-base-100 text-base text-center overflow-hidden">
                                    {/* head */}
                                    <thead className='text-white text-lg'>
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
                                                <tr data-aos="fade-left"
                                                    data-aos-delay={index * 200} key={index} className="hover">
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
                                    items.map((item, index) =>
                                        <div data-aos="zoom-in-up"
                                            data-aos-delay={index % 3 * 400} key={item._id} className="card glass transition-transform hover:bg-[#ec570d] duration-300">
                                            <figure>
                                                <img className='h-[250px] w-full lg:h-[280px] xl:h-[350px] transition-transform  duration-300 hover:scale-110'
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
                        items.length < 1 ? <h1 className='text-5xl text-white font-bold'>You haven't added any item</h1> : <h1></h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRecoveredItems;