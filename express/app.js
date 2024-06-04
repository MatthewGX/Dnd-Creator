const express = require('express');
const client = require('./db.config');

client.db('testing').createCollection('test1');

const testRoutes = require('./routes/test-routes');
const userRoutes = require('./routes/user-routes');

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log('test');
    res.send('Hello World!');
});

app.get('/test', async (req, res) => {
    let collection = client.db('testing').collection('test1');
    let results = await collection.find({})
    .limit(50)
    .toArray();
    res.send(results).status(200);
})
app.post('/testpost', async (req, res) => {
    let collection = client.db('testing').collection('test1');
    
    let testJSON = {'name': 'Hello World', 'id': 12345, 'groups': []}

    collection.insertOne(testJSON);

    res.send(testJSON).status(200);
})

// app.use('/test', testRoutes);
app.use('/user', userRoutes);

module.exports = app;

// app.listen(port, () => {
//     console.log(`Example App listening at http://localhost:${port}`);
// });