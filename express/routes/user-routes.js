const express = require('express');
const router = express.Router();
const userModel = require('../models/user')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs-react');

const User = userModel;

// Used for name splitting
const nameParser = (name) => {
    return name.split(" ");
}

router.post('/register', async (req, res) => {
    // const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    try {
        //   const hashedPassword = bcrypt.hashSync(password, 10);
        const hashedPassword = password;
        const newUser = new User({
            username: username,
            // name: nameParser(username),
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
    const username = req.body.username;
    const password = req.body.password;

    console.log('Trying: login', username, password);
    try {
        const user = await User.findOne({ username: username });

        // if (user && bcrypt.compare(password, user.password)) {
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

router.get('/', async (req, res) => {
    const userId = req.body.id;
    // const userId = parseInt(req.body.id, 10);
    console.log('Getting User Info: id = ' + userId);

    const user = await User.findById(userId);

    if (user) {
        console.log('User Found: ' + user);
        res.status(200).json(user);
    }
    else {
        res.status(404).send("User not Found");
    }
});

module.exports = router;