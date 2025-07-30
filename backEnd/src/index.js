import express from "express"
import mongoose from 'mongoose';
import User from "../db/userRecipeComboModel.js"
import "dotenv/config"

const app = express()
const port = process.env.Port || 3000;

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/MohdAfzal')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

//Middleware here
app.use(express.json())
const basicAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }

    const base64Credentials = authHeader.split(' ')[1];
    const decoded = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [email, password] = decoded.split(':');

    try {
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        req.user = user;
        req.isAuthenticated = true;
        next();
    } catch (err) {
        return res.status(500).json({ message: 'Server error during auth', error: err.message });
    }
}

//Routes 
app.get('/recipes',basicAuth, async (req, res) => {
    if (req.isAuthenticated) {
        return res.json(req.user.recipes);
    }
    res.status(401).json({ message: 'Not authenticated' });
});

app.get('/recipes/:id',basicAuth, async (req, res) => {
    const recipe = req.user.recipes.find(r => r.recipeId == req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
});

app.post('/recipes',basicAuth, async (req, res) => {
    const { title, ingredients, description } = req.body;
    const newRecipe = {
        recipeId: Date.now(),
        title,
        ingredients,
        description
    };

    req.user.recipes.push(newRecipe);
    await req.user.save();
    res.status(201).json({ message: 'Recipe added', recipe: newRecipe });
});

app.delete('/recipes/:id',basicAuth, async (req, res) => {
    req.user.recipes = req.user.recipes.filter(r => r.recipeId != req.params.id);
    await req.user.save();
    res.json({ message: 'Recipe deleted' });
});

app.post('/recipes/login', async (req, res) => {
    console.log("here")
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Success
    res.status(200);
    res.json({
      message: "Login successful",
      userId: user._id,
      username: user.username
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.post('/recipes/addUser', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const existing = await User.findOne({ $or: [{ email }, { username }] });
        if (existing) {
            return res.status(409).json({ message: "User already exists" });
        }

        const newUser = new User({
            username,
            email,
            password,
            recipes: []
        });

        await newUser.save();
        res.status(201).json({ message: "User created", userId: newUser._id });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});



//listening server
app.listen(port, () => {
    console.log(`Listenning on Port ${port}`)
});
