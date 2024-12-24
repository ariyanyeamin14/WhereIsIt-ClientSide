import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const {_id, postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail } = post
    
    return (
        <div className="card glass">
            <figure>
                <img className='h-[250px] w-full lg:h-[280px] xl:h-[350px]'
                    src={thumbnail}
                    alt="thumbnail" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-left'>{description}</p>
                <p className='text-left'>{location}</p>
                <p className='text-left'> {dateLost} </p>
                <div>
                    <Link to={`/items/${_id}`} className="btn w-full btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;