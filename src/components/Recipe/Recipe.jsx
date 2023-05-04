import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLoaderData } from 'react-router-dom';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Recipe = () => {
    const recipes = useLoaderData();
    const list = recipes.list_recipe.map(r => r)
    const lis = list.join(' - ')
    const { photo, name, description, likes, experience } = recipes;

    const [disable, setDisable] = useState(true);
    const habdelButton = () => {
        setDisable(false)
    }

    return (
        <div className="card bg-base-100 shadow-xl">
           
           <FontAwesomeIcon icon={faBookmark} className="btn btn-success my-5" onClick={habdelButton} disabled={!disable}/>

            <figure><img src={photo} className="w-100 rounded-full" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Likes: {likes}</p>
                <p>Experience: {experience} years</p>
                <p className='text-2xl font-bold'>Recipes List: 
                    <Link to='/recipe-detail'> {lis}</Link>
                </p>
                <div className="card-actions justify-center">
                    <Link to='/'>
                        <button className="btn btn-primary btn-wide my-5">Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Recipe;