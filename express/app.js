const express = require('express');
const testRoutes = require('./routes/test-routes');
const userRoutes = require('./routes/user-routes');

const app = express();
// const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/test', testRoutes);
app.use('/user', userRoutes);

module.exports = app;

// app.listen(port, () => {
//     console.log(`Example App listening at http://localhost:${port}`);
// });