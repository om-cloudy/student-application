const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

// Test API
app.get('/api', (req, res) => {
    res.send('Student Management Backend Running');
});

// GET: Display all students
app.get('/api/students', async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM students'
        );

        res.json(rows);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// POST: Add new student
app.post('/api/students', async (req, res) => {
    try {
        const { name, email, course, age } = req.body;

        if (!name || !email || !course || !Number.isInteger(Number(age)) || Number(age) < 1) {
            return res.status(400).json({
                message: 'Please enter valid student details'
            });
        }

        const [result] = await db.query(
            'INSERT INTO students (name, email, course, age) VALUES (?, ?, ?, ?)',
            [name, email, course, Number(age)]
        );

        res.status(201).json({
            message: 'Student added successfully',
            id: result.insertId
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// DELETE: Delete student
app.delete('/api/students/:id', async (req, res) => {
    try {
        const [result] = await db.query(
            'DELETE FROM students WHERE id = ?',
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Student not found'
            });
        }

        res.json({
            message: 'Student deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// Start backend server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
