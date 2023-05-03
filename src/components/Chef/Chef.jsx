import React from 'react';

const Chef = ({ chef }) => {
    const { id, photo } = chef;

    return (
        <div className="card card-compact bg-base-100 shadow-xl m-10 p-5">
            <figure><img src={photo} alt="..." /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        
    );
};

export default Chef;