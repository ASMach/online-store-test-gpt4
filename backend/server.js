const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.post("/cart", (req, res) => {
  const { productId, quantity } = req.body;
  // This should interact with a session or a more complex database logic
  res.json({ message: "Product added to cart", productId, quantity });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
