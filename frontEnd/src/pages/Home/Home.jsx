import "./Home.css";
import { NavLink } from "react-router-dom";
import { RecipeCard } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const isAuthenicated = localStorage.getItem("isAuthenicated")

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("/recipes", {
          auth: {
            username: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
          },
        });

        setRecipes(res.data);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        alert("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home-container">
      {!isAuthenicated ?
        // When not logged in
        <>
          <h1 className="home-title">Welcome to Afzal's Recipe Website</h1>
          <p className="home-description">
            Discover a world of delicious recipes, cooking tips, and kitchen inspiration. Whether you're a beginner or a seasoned chef, there's something here for everyone.
          </p>

          <div className="auth-section">
            <div className="auth-box">
              <p className="signup-message">
                🍲 New here? <br />
                <span>Register now and start saving your favorite recipes!</span>
              </p>
              <NavLink to="/register" className="auth-link">Register</NavLink>
            </div>

            <div className="auth-box">
              <p className="login-message">
                👨‍🍳 Already have an account? <br />
                <span>Log in to view and manage your personal recipe collection.</span>
              </p>
              <NavLink to="/login" className="auth-link">Login</NavLink>
            </div>
          </div>
        </> :
        //if logged in
        <>
          <h1 className="home-title">Welcome {localStorage.getItem("username")}</h1>
          <p className="home-description">
            Hey, welcome back! We're glad to see you again. Dive in to explore new recipes or manage your personal collection. Happy cooking!
          </p>
          {
            loading ?
              <p>Loading...</p> :
              <>
                <div className="recipe-list">
                  {recipes.length === 0 ? (
                    <p>No recipes found.</p>
                  ) : (
                    recipes.map((recipe) => (
                      <RecipeCard
                        key={recipe.recipeId}
                        title={recipe.title}
                        description={recipe.description}
                        ingredeint={recipe.ingredients}
                      />
                    ))
                  )}
                </div>
              </>
          }
        </>}
    </div>
  );
}

export default Home;
