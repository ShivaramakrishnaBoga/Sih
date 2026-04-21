const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

// database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "innovation_portal"
});

// connect database
db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Connected to MySQL");
    }
});

// insert user data
app.post("/adduser", (req, res) => {
    const { name, email, password, role, dept_id } = req.body;

    const sql = "INSERT INTO users (name,email,password,role,dept_id) VALUES (?,?,?,?,?)";

    db.query(sql, [name, email, password, role, dept_id], (err, result) => {
        if (err) {
            res.send("Error inserting data");
        } else {
            res.send("User added successfully");
        }
    });
});

// get all users
app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {
        if (err) {
            res.send("Error fetching data");
        } else {
            res.json(result);
        }
    });
});

// insert project
app.post("/addproject", (req, res) => {
    const { project_name, project_desc, user_id } = req.body;

    const sql = "INSERT INTO projects (project_name,project_desc,user_id) VALUES (?,?,?)";

    db.query(sql, [project_name, project_desc, user_id], (err, result) => {
        if (err) {
            res.send("Error");
        } else {
            res.send("Project added");
        }
    });
});

// get all projects
app.get("/projects", (req, res) => {
    db.query("SELECT * FROM projects", (err, result) => {
        if (err) {
            res.send("Error");
        } else {
            res.json(result);
        }
    });
});

// start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
