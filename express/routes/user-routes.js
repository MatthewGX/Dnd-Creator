const express = require('express');
const router = express.Router();
const userModel = require('../models/user')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = userModel;

// Used for name splitting
const nameParser = (name) => {
    return name.split(" ");
}

router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    try {
        const hashedPassword = password;
        const newUser = new User({
            username: username,
            password: hashedPassword,
            groupIDs: [],
            characterIDs: [],
            profileCreated: new Date()
        });
        await newUser.save();
        res.status(201).json(newUser);
        console.log('Success!');
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(400).send('Error registering user');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('Trying: login', username, password);
    try {
        const user = await User.findOne({ username });

        if (user && password === user.get('password')) {
            res.status(200).json(user);
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(400).send('Error logging in');
    }
});

// Reset pwd
router.post('/reset-password', async (req, res) => {
    const { username, newPassword } = req.body;
    console.log('Received new password:', newPassword);
  
    if (!username || !newPassword) {
      return res.status(400).send('Missing required fields');
    }
  
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).send('Username not found');
      }
  
      user.password = newPassword; // Storing unhashed password
      await user.save();
  
      res.status(200).send('Password reset successful');
    } catch (err) {
      console.error('Error resetting password:', err);
      res.status(400).send('Error resetting password');
    }
  });

router.get('/find/:id', async (req, res) => {
    const userId = req.params.id;
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

router.patch('/add-group', async (req, res) => {
    const userId = req.body.id;
    const groupId = req.body.groupId;

    const user = await User.findById(userId);
    console.log([...user.groupIDs, groupId]);
    // user.updateOne({groupIDs: [...user.groupIDs, groupId]})

    if (user) {
        console.log('User Found: ' + user);

        // Adds groupId to user ig groupId not in user.groupIDs
        if (!user.groupIDs.some((item) => item == groupId)) {
            user.groupIDs.push(groupId);
            user.save();
            console.log(user);
            res.status(200).json(user);
        }
        else {
            res.status(404).send("User already in Group");
        }
    }
    else {
        res.status(404).send("User not Found");
    }
});

router.patch('/remove-group', async (req, res) => {
    const userId = req.body.id;
    const groupId = req.body.groupId;
    
    const user = await User.findById(userId);

    if (user) {
        console.log(user.groupIDs.filter(group => group != groupId));
        user.groupIDs = user.groupIDs.filter(group => group != groupId);
        user.save();

        res.status(200).json(user);
    }
    else {
        res.status(404).send('User not found');
    }
});

router.patch('/add-sheet', async (req, res) => {
    const userId = req.body.id;
    const sheetId = req.body.sheetId;

    const user = await User.findById(userId);

    if (user) {
        console.log('User Found: ' + user);

        // Adds groupId to user ig groupId not in user.groupIDs
        if (!user.characterIDs.some((item) => item == sheetId)) {
            user.characterIDs.push(sheetId);
            user.save();
            console.log(user);
            res.status(200).json(user);
        }
        else {
            res.status(404).send("User already has sheet");
        }
    }
    else {
        res.status(404).send("User not Found");
    }
});

router.get('/userList', async (req, res) => {
    const userList = await User.find({});

    console.log(userList);

    res.status(200).json(userList);
})

module.exports = router;