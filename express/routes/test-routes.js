const express = require('express');
const router = express.Router();

// Route handler for "/users" URL
// GET request to "/users"
router.get('/', (req, res) => {
    // For demonstration, we'll send back a static list of users
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ];
    // Respond with the list of users as JSON
    res.json(users);
});

// Route handler for creating a new user
// POST request to "/users"
router.post('/', (req, res) => {
    // In a real app, you'd save the new user to a database
    // Here, we'll just simulate this process
    // Extract the new user data from the request body
    const newUser = req.body;
    // For demonstration, we'll assume the new user gets an ID of 3
    newUser.id = 3;
    // Respond with the created user as JSON
    res.status(201).json(newUser);
});

// Route handler for retrieving a specific user by ID
// GET request to "/users/:id"
router.get('/:id', (req, res) => {
    // Extract the user ID from the route parameters
    const userId = parseInt(req.params.id, 10);
    // For demonstration, we'll send back a static user
    // In a real app, you'd fetch this user from a database
    const user = { id: userId, name: 'Charlie' };
    // Respond with the user as JSON
    res.json(user);
});

// Route handler for updating a specific user by ID
// PUT request to "/users/:id"
router.put('/:id', (req, res) => {
    // Extract the user ID from the route parameters
    const userId = parseInt(req.params.id, 10);
    // Extract the updated user data from the request body
    const updatedUser = req.body;
    updatedUser.id = userId;
    // In a real app, you'd update the user in the database
    // Respond with the updated user as JSON
    res.json(updatedUser);
});

// Route handler for deleting a specific user by ID
// DELETE request to "/users/:id"
router.delete('/:id', (req, res) => {
    // Extract the user ID from the route parameters
    const userId = parseInt(req.params.id, 10);
    // In a real app, you'd delete the user from the database
    // Respond with a success message
    res.status(204).send();
});

module.exports = router;