const express = require('express');
const router = express.Router();
const userModel = require('../models/user')
const mongoose = require('mongoose');
// const client = require('../db.config');
const bcrypt = require('bcryptjs-react');

const User = userModel;

// client.db('Users').createCollection('User');

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
    const username = req.body.name;
    const password = req.body.password;
    console.log(req.body);
    try {
        //   const hashedPassword = await bcrypt.hash(password, 10);
        const hashedPassword = password;
        const newUser = new User({
            name: nameParser(username),
            password: hashedPassword,
            groupIDs: [],
            profileCreated: new Date()
        });
        newUser.save();
        res.status(201).json(newUser);
        console.log('Success!');
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(400).send('Error registering user');
    }
});

router.post('/login', async (req, res) => {
    // const { username, password } = req.body;
    const username = req.body.name;
    const password = req.body.password;
    console.log('Trying: login', username, password);
    try {
        // const collection = client.db('Users').collection('User');
        const user = await User.findOne({ name: nameParser(username) });
        // console.log('Found: ' + user);
        // console.log(password, user.get('password'));
        // console.log(password == user.get('password'))
        if (user && password == user.get('password')) {
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