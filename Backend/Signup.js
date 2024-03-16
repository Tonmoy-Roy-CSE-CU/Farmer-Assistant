const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Create MySQL connection
const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "farms"
});

// Connect to MySQL database
con.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Create users table if not exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    location_id INT NOT NULL,
    FOREIGN KEY (location_id) REFERENCES Location(location_id)
)
`;

con.query(createTableQuery, (err, result) => {
    if (err) {
        console.error('Error creating users table:', err);
    } else {
        console.log("Table 'users' created or already exists");
    }
});

// Handle signup request
app.post('/farms', (req, res) => {
    const { username, email, password, locationId } = req.body;

    // Insert user data into users table along with the received locationId
    con.query('INSERT INTO users (username, email, password, location_id) VALUES (?, ?, ?, ?)', [username, email, password, locationId], (err, result) => {
        if (err) {
            console.error('Error inserting user into database:', err);
            res.status(500).json({ message: 'An error occurred while signing up. Please try again later.' });
        } else {
            console.log('User inserted into database with ID:', result.insertId);
            res.status(201).json({ message: 'User created successfully' });
        }
    });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
