const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const client = require('./db.config');

let db = client.db('testing').createCollection('test1');

const testRoutes = require('./routes/test-routes');
const userRoutes = require('./routes/user-routes');
// const mongoDB = require('./routes/mongodb-example');

const app = express();
const port = 3000;

app.use(express.json());

// mongoose.connect('mongodb://localhost:')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('test', async (req, res) => {
    let collection = await db.collection('testing');
    let results = await collection.find({})
    .limit(50)
    .toArray();
    res.send(results).status(200);
})

app.use('/test', testRoutes);
app.use('/user', userRoutes);
// app.use('/mongo', mongoDB);

module.exports = app;

// app.listen(port, () => {
//     console.log(`Example App listening at http://localhost:${port}`);
// });