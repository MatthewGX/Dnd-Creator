const express = require('express');
const router = express.Router();
const client = require('../db.config');
const bcrypt = require('bcryptjs-react');

client.db('Users').createCollection('User');

var test = [
    { id: 1, name: ['John', 'Doe'], groupIDs: [] },
    { id: 2, name: ['Jane', 'Doe'], groupIDs: [1, 2, 3] }
];

// users endpoint to get all users
router.get('/users', (req, res) => {
    const users = [
        { id: 1, name: ['John', 'Doe'], groupIDs: [] },
        { id: 2, name: ['Jane', 'Doe'], groupIDs: [1, 2, 3] }
    ]

    res.json(test);
})

const nameParser = (name) => {
    return name.split(" ");
}

// user post endpoint
// router.post('/register', (req, res) => {
//     const newUser = {
//         id: ++test.length,
//         name: nameParser(req.body.name),
//         groupIDs: []
//     };

//     test.push(newUser);
//     res.json(newUser);
// });

router.post('/register', async (req, res) => {
    // const { username, password } = req.body;
    const username = 'test test';
    const password = 'test';
    console.log(req.body);
    try {
        //   const hashedPassword = await bcrypt.hash(password, 10);
        const hashedPassword = password;
        const newUser = {
            name: nameParser(username),
            password: hashedPassword,
            groupIDs: [],
            profileCreated: new Date()
        };
        const collection = client.db('Users').collection('User');
        await collection.insertOne(newUser);
        res.status(201).json(newUser);
        console.log('Success!');
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(400).send('Error registering user');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const collection = client.db('Users').collection('User');
        const user = await collection.findOne({ name: nameParser(username) });
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).json(user);
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(400).send('Error logging in');
    }
});

router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);

    for (let user of test) {
        if (user.id === userId) {
            res.json(user);
        }
    }

    res.status(404).send("User not Found");
});

module.exports = router;