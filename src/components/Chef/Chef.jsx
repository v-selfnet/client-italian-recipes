import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, photo, name, experience, recipes, likes } = chef;

    return (

        <div className="card bg-base-100 shadow-xl my-5">
            <figure><img src={photo} className="w-100 rounded-full" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Likes: {likes}</p>
                <p>Experience: {experience} years</p>
                <p>Total Recipes: {recipes} years</p>
                <div className="card-actions justify-center">
                <Link to={`/recipe/${id}`}>
                    <button className="btn btn-primary btn-wide my-3">View Recipes</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;