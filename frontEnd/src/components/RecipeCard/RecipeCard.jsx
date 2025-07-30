import "./recipeCard.css";

function RecipeCard({ title, description, ingredeint }) {
  return (
    <div className="recipe-card">
      <h3 className="recipe-card-title">{title}</h3>
      <p className="recipe-card-description">{description}</p>
      <p className="recipe-card-ingredient"><strong>Ingredient:</strong> {ingredeint}</p>
    </div>
  );
}

export default RecipeCard;
