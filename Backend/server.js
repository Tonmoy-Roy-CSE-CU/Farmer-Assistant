const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "farms",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Define the endpoint to fetch crops based on criteria
app.get("/crops", async (req, res) => {
  const { month, soil, location } = req.query;

  try {
    const query = `
      SELECT c.crop_id, c.crop_name
      FROM month_crops mc
      JOIN soil_crops sc ON mc.crop_id = sc.crop_id
      JOIN location_crops lc ON sc.crop_id = lc.crop_id
      JOIN month m ON mc.month_id = m.month_id
      JOIN soil s ON sc.soil_id = s.soil_id
      JOIN location l ON lc.location_id = l.location_id
      JOIN crops c ON mc.crop_id = c.crop_id
      WHERE m.month_name = ? AND s.soil_name = ? AND l.location_name = ?
    `;

    const results = await queryDatabase(query, [month, soil, location]);
    res.json(results);
  } catch (error) {
    console.error("Error fetching crops:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Helper function for querying the database with parameters
const queryDatabase = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};



const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    )
`;

db.query(createTableQuery, (err, result) => {
    if (err) {
        console.error("Error creating or checking the 'users' table:", err);
    } else {
        console.log("Table 'users' created or already exists");
    }
});

app.post('/farms', (req, res) => {
  const { email, username, password } = req.body;

  const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  
  db.query(insertUserQuery, [username, email, password], (err, result) => {
      if (err) {
          console.error("Error inserting user:", err);
          res.status(500).send({ message: "Internal server error", error: err.message });
      } else {
          res.status(200).send({ message: "ACCOUNT CREATED SUCCESSFULLY" });
      }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});