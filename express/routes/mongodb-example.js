// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Initialize the Express application
const app = express();
// Define the port on which the server will run
const port = 3000;
// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());
// Connect to the MongoDB database
// Replace 'myapp' with your database name
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Get the default connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));
// Bind connection to open event (to log when connection is successful)
db.once('open', () => {
    console.log('Connected to MongoDB');
});
// Define a schema for items
const itemSchema = new mongoose.Schema({
    name: String
});
// Create a model based on the schema
const Item = mongoose.model('Item', itemSchema);
// Define a simple route to check if the server is running
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Define a route to create a new item
app.post('/items', (req, res) => {
    // Create a new item instance
    const newItem = new Item({
        name: req.body.name
    });
    // Save the item to the database
    newItem.save((err, savedItem) => {
        if (err) return res.status(500).send(err); // Handle errors
        res.status(200).send(savedItem); // Send the saved item as a response
    });
});
// Define a route to get all items
app.get('/items', (req, res) => {
    // Find all items in the database
    Item.find({}, (err, items) => {
        if (err) return res.status(500).send(err); // Handle errors
        res.status(200).send(items); // Send the list of items as a response
    });
});
// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});