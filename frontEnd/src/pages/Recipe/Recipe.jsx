import { RecipeCard } from "../../components/index";
import './recipe.css';

function Recipe() {
    return (
        <><div className="recipe-block">
            <div>
                <h1 className="recipe-heading">Create a new Recipe</h1>
                <form className="recipe-form">
                    <label htmlFor="title" className="recipe-label">Title</label>
                    <input type="text" name="title" id="title" className="recipe-input" /><br />

                    <label htmlFor="ingredient" className="recipe-label">Ingredient</label>
                    <input type="text" name="ingredient" id="ingredient" className="recipe-input" /><br />

                    <label htmlFor="description" className="recipe-label">Description</label>
                    <input type="text" name="description" id="description" className="recipe-input" /><br />

                    <button type="submit" id="recipe-submit">Submit</button>
                </form>
            </div>
            <div>
                <h2 className="recipe-heading">Recipes</h2>
                <RecipeCard title="Tea" description="Hot milk tea" ingredeint="Milk, Tea Powder" />
                {/* RecipeCard components will go here */}
            </div>
        </div>
        </>
    );
}

export default Recipe;