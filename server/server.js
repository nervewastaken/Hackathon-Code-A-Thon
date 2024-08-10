const express = require("express");
const db = require("./database");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Test database connection
app.get("/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT * from public.nodetest");
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error connecting to the database");
  }
});

// Endpoint to create a table
app.post("/create-table", async (req, res) => {
  const createTableQuery = `
      CREATE TABLE IF NOT EXISTS public.nodetest (
        id SERIAL PRIMARY KEY,
        data VARCHAR(255)
      );
    `;

  try {
    await db.query(createTableQuery);
    res.send("Table created successfully");
  } catch (err) {
    console.error("Error creating table", err.stack);
    res.status(500).send("Failed to create table");
  }
});

app.post("/add-values", async (req, res) => {
  const { id, data } = req.body; // Assuming you pass `id` and `data` in the request body
  const insertQuery = `
        INSERT INTO public.nodetest (id, data) VALUES ($1, $2);
    `;

  try {
    await db.query(insertQuery, [id, data]);
    res.send("Value added successfully");
  } catch (err) {
    console.error("Error adding value", err.stack);
    res.status(500).send("Failed to add stuff");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
