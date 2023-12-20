import React, { useState, useEffect } from 'react';
import Searches from '../components/Searches';
import RecipeCard from '../components/RecipePage';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/recipes.json');
                const data = await response.json();
                setRecipes(data);
                setFilteredRecipes(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
        filterRecipes(term.toLowerCase());
    };

    const filterRecipes = (term) => {
        let filtered = recipes.filter((recipe) => recipe.title.toLowerCase().includes(term));
        if (term === 'all') {
            filtered = recipes
        }
        setFilteredRecipes(filtered);

    };

    return (
        <div>
            <Searches onSearch={handleSearch} />
            <div className="recipes-container">
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
