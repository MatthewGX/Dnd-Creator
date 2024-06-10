const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to local mongoDB
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true,
    useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// Bind connection to open event (to log when connection is successful)
db.once('open', () => {
console.log('Connected to MongoDB');
});


// Create Express Application
const testRoutes = require('./routes/test-routes');
const userRoutes = require('./routes/user-routes');
const groupRoutes = require('./routes/group-routes');

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
    console.log('test');
    res.send('Hello World!');
});

app.get('/test', async (req, res) => {
    res.status(200).send('Hello World!');

    // let collection = client.db('testing').collection('test1');
    // let results = await collection.find({})
    // .limit(50)
    // .toArray();
    // res.send(results).status(200);
})
app.post('/testpost', async (req, res) => {
    // let collection = client.db('testing').collection('test1');
    
    // let testJSON = {'name': 'Hello World', 'id': 12345, 'groups': []}

    // collection.insertOne(testJSON);

    res.status(200).send('TESTING POST');
})

// app.use('/test', testRoutes);
app.use('/user', userRoutes);
app.use('/group', groupRoutes);

module.exports = app;

// app.listen(port, () => {
//     console.log(`Example App listening at http://localhost:${port}`);
// });