import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipes = useLoaderData();
    const list = recipes.list_recipe.map(r => r)
    const lis = list.join(' - ')
    const { photo, name, description, likes, experience } = recipes;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={photo} className="w-100 rounded-full" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Likes: {likes}</p>
                <p>Experience: {experience} years</p>
                <p className='text-2xl font-bold'>Recipes List: {lis}</p>
                <div className="card-actions justify-center">
                    <Link to='/'>
                        <button className="btn btn-primary my-5 w-full">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Recipe;