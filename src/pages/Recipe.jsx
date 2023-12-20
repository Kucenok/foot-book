import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/recipes.json`);
                const data = await response.json();
                const selectedRecipe = data.find(recipe => recipe.id === parseInt(id, 10));

                setRecipe(selectedRecipe);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="">
            {recipe ? (
                <div className='row mx-auto my-5'>
                    <img src={recipe.image} alt={recipe.title} className='img-fluid w-100' />

                    <h2>{recipe.title}</h2>
                    <hr />
                    <p>{recipe.description}</p>
                    <h3> Author: </h3>
                    <img src={recipe.authorImg} alt={recipe.title} style={{ width: '200px', height: 'auto' }} />

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Recipe;
