import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetail from '../RecipeDetail/RecipeDetail';

const Recipe = () => {
    const {id} = useParams()
    const r = useLoaderData()
    return (
        <div>
            <h3>Recipe: {r.length}</h3>
            <h3>Recipe: {id}</h3>
            {
                // r.map(recipe => <RecipeDetail
                //     key={recipe.id}
                //     recipe={recipe}
                // ></RecipeDetail>)

            }
        </div>
    );
};

export default Recipe;