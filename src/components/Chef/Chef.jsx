import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, photo, name, experience, recipes, likes } = chef;

    return (
        <div className="card card-compact bg-base-100 shadow-xl m-10 p-5">
            <figure><img src={photo} alt="..." /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Experience: {experience}</p>
                <p>Number of Recipes: {recipes}</p>
                <p>Likes: {likes}</p>
                
                <Link to={`/recipe/${id}`}>
                    <button className="btn btn-primary">View Recipes</button>
                </Link>
            </div>
        </div>
        
    );
};

export default Chef;