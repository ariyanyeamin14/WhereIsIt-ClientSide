import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, aosDelay }) => {
    const { _id, postType, thumbnail, title, description, category, location, dateLost, contactName, contactEmail } = post;

    return (
        <div
            id='card'
            data-aos="zoom-in-up"
            data-aos-delay={aosDelay}
            className="card glass"
        >
            <figure>
                <img
                    className="h-[250px] w-full lg:h-[280px] xl:h-[350px] object-cover transition-transform  duration-300 hover:scale-110"
                    src={thumbnail}
                    alt="thumbnail"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{title}</h2>
                <p className="text-left text-white">{description}</p>
                <p className="text-left text-white">{location}</p>
                <p className="text-left text-white">{dateLost}</p>
                <div>
                    <Link
                        to={`/items/${_id}`}
                        className="btn w-full  text-white bg-[#ec570d]"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
