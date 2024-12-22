import React from 'react';

const PostCard = ({ post }) => {
    const { postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail } = post
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
                <p className='text-left'> {dateLost} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;