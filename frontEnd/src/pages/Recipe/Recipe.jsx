import { RecipeCard } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";
import './recipe.css';


function Recipe() {
    const navigate = useNavigate();
    const isAuthenicated = localStorage.getItem("isAuthenicated");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const [title, setTitle] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [description, setDescription] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await axios.get("/recipes", {
                    auth: {
                        username: email,
                        password: password
                    }
                });
                setRecipes(res.data.sort((a, b) => b.recipeId - a.recipeId));
            } catch (err) {
                console.error("Failed to fetch recipes:", err);
                alert("Failed to load recipes. Please try again.");
            }
        };

        if (isAuthenicated) {
            fetchRecipes();
        }

    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isAuthenicated) {
            alert("Login or register first!");
            navigate("/");
            return;
        }
        try {
            const res = await axios.post("/recipes", {
                title,
                ingredients: ingredient,
                description
            }, {
                auth: {
                    username: email,
                    password: password
                }
            });

            setRecipes(prev => [res.data.recipe, ...prev]);
            setTitle("");
            setIngredient("");
            setDescription("");
        } catch (err) {
            console.error("Error submitting recipe:", err);
            alert("Failed to add recipe");
        }
    };
    const handleDelete = async (e) => {
        const recipeId = e.target.value;

        try {
            await axios.delete(`/recipes/${recipeId}`, {
                auth: {
                    username: email,
                    password: password
                }
            });

            // Remove the recipe from local state
            setRecipes(prev => prev.filter(recipe => recipe.recipeId != recipeId));
        } catch (err) {
            console.error("Failed to delete recipe:", err);
            alert("Failed to delete recipe");
        }

    }

    return (
        <><div className="recipe-block">
            <div>
                <h1 className="recipe-heading">Create a new Recipe</h1>
                <form className="recipe-form" onSubmit={handleSubmit}>
                    <label htmlFor="title" className="recipe-label">Title</label>
                    <input
                        required
                        type="text"
                        name="title"
                        id="title"
                        className="recipe-input"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    /><br />

                    <label htmlFor="ingredient" className="recipe-label">Ingredient</label>
                    <input
                        required
                        type="text"
                        name="ingredient"
                        id="ingredient"
                        className="recipe-input"
                        value={ingredient}
                        onChange={e => setIngredient(e.target.value)}
                    /><br />

                    <label htmlFor="description" className="recipe-label">Description</label>
                    <input
                        required
                        type="text"
                        name="description"
                        id="description"
                        className="recipe-input"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    /><br />

                    <button type="submit" id="recipe-submit">Submit</button>
                </form>
            </div>
            {isAuthenicated && recipes.map(r => (
                <div className="recipe-item" key={r.recipeId}>
                    <RecipeCard
                        title={r.title}
                        description={r.description}
                        ingredeint={r.ingredients}
                    />
                    <button onClick={handleDelete} value={r.recipeId} className="delete-btn">Delete</button>
                </div>
            ))}
        </div>
        </>
    );
}

export default Recipe;