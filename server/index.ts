import express from 'express';
import bodyParser from 'body-parser';
import { db } from './drizzle.config';  // Import your Drizzle configuration
import { employee, scores, titles } from './src/schema'; // Import your table schemas

const app = express();
app.use(bodyParser.json());

// CRUD Operations for the `employee` table

// Create an Employee
app.post('/employees', async (req, res) => {
  try {
    const newEmployee = await db.insert(employee).values(req.body).returning('*');
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All Employees
app.get('/employees', async (req, res) => {
  try {
    const allEmployees = await db.select().from(employee);
    res.json(allEmployees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an Employee by ID
app.put('/employees/:id', async (req, res) => {
  try {
    const updatedEmployee = await db
      .update(employee)
      .set(req.body)
      .where(employee.id.eq(req.params.id))
      .returning('*');
    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an Employee by ID
app.delete('/employees/:id', async (req, res) => {
  try {
    await db.delete(employee).where(employee.id.eq(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CRUD Operations for the `scores` table

// Create a Score Entry
app.post('/scores', async (req, res) => {
  try {
    const newScore = await db.insert(scores).values(req.body).returning('*');
    res.status(201).json(newScore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All Scores
app.get('/scores', async (req, res) => {
  try {
    const allScores = await db.select().from(scores);
    res.json(allScores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Score by ID
app.put('/scores/:id', async (req, res) => {
  try {
    const updatedScore = await db
      .update(scores)
      .set(req.body)
      .where(scores.id.eq(req.params.id))
      .returning('*');
    res.json(updatedScore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a Score by ID
app.delete('/scores/:id', async (req, res) => {
  try {
    await db.delete(scores).where(scores.id.eq(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CRUD Operations for the `titles` table

// Create a Title Entry
app.post('/titles', async (req, res) => {
  try {
    const newTitle = await db.insert(titles).values(req.body).returning('*');
    res.status(201).json(newTitle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read All Titles
app.get('/titles', async (req, res) => {
  try {
    const allTitles = await db.select().from(titles);
    res.json(allTitles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Title by ID
app.put('/titles/:id', async (req, res) => {
  try {
    const updatedTitle = await db
      .update(titles)
      .set(req.body)
      .where(titles.orderId.eq(req.params.id))
      .returning('*');
    res.json(updatedTitle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a Title by ID
app.delete('/titles/:id', async (req, res) => {
  try {
    await db.delete(titles).where(titles.orderId.eq(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
