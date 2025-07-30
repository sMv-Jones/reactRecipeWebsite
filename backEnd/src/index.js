import express from "express"
import axios from  "axios"
import "dotenv/config"

const app = express()
const port = process.env.Port || 3000;

//Middleware here
app.use(express.json())

//Routes 
app.get('/recipes', (req, res) => {
    res.send("Hello");
});
app.get('/recipes/:id', (req, res) => {
    res.send("Hello");
});
app.post('/recipes', (req, res) => {
    res.send("Hello");
});
app.put('/recipes/:id', (req, res) => {
    res.send("Hello");
});
app.delete('/recipes/:id', (req, res) => {
    res.send("Hello");
});
app.post('/recipes/addUser', (req, res) => {
    res.send("Hello");
});


app.listen(port, () => {
    console.log(`Listenning on Port ${port}`)
});