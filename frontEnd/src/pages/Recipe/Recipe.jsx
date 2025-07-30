import {RecipeCard} from "../../components/index"
function Recipe() {

    return (
        <>
            <div>
                <h1>Create a new Recipe</h1>
                <form>
                    <label htmlFor="title">Title</label> <input type="text" name="title" id="title" /><br />
                    <label htmlFor="ingredient">Ingredient</label> <input type="text" name="ingredient" id="ingredient" /><br />
                    <label htmlFor="description">Description</label> <input type="text" name="description" id="description" /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                This is the Recipe
                {
                }
            </div>
        </>
    )
}

export default Recipe;