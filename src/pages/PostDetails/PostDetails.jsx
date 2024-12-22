import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const _id = useParams()
    const [post, setpost] = useState({})
    const [isLost, setIsLost] = useState(false)
    const { postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail } = post

    useEffect(() => {
        axios.get(`http://localhost:5000/items/${_id.id}`)
            .then(res => {
                setpost(res.data)
            })
    }, [])

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
                    <h2 className="card-title mb-auto">{description}</h2>
                    <p>
                        {isLost ? 'Lost on' : 'Found on '} {location}
                    </p>
                    <p> Date {isLost ? 'lost' : 'found'} : {dateLost} </p>
                    <p>Email: {contactEmail}</p>
                    <p>Name: {contactName}</p>
                    <div className="card-actions ">
                        <button className="btn w-full btn-primary">
                            {isLost? "Found This!":"This is Mine!" }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;