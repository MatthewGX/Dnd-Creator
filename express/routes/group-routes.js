const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = require('../models/group');
const User = require('../models/user');


router.post('/create', async (req, res) => {
    console.log('Received data:', req.body);
    const { groupName,       description } = req.body;
    if (!groupName ) {
        return res.status(400).send('Group name and admin ID are required');
      }
    try {
      // Find the admin user
      // const admin = await User.findById(adminId);
      // if (!admin) {
      //   return res.status(404).send('Admin user not found');
      // }
  
      // Create new group
      const newGroup = new Group({
        groupName,
        // admin: admin._id,
        members: [],
        description
      });
  
        await newGroup.save();
        res.status(201).json(newGroup);
        console.log('Success!');
    } catch (err) {
        console.error('Error creating group:', err);
        res.status(400).send('Error creating group');
    }
  });
  
  // Route to get all groups
  router.get('/', async (req, res) => {
    try {
        const groups = await Group.find().populate('admin', 'name').populate('members', 'name');
        res.status(200).json(groups);
    } catch (err) {
      console.error('Error fetching groups:', err);
      res.status(400).send('Error fetching groups');
    }
  });
  
  // Route to get a group by ID
  router.get('/:id', async (req, res) => {
    try {
      const group = await Group.findById(req.params.id).populate('admin', 'name').populate('members', 'name');
      if (!group) {
        return res.status(404).send('Group not found');
      }
      res.status(200).json(group);
    } catch (err) {
      console.error('Error fetching group:', err);
      res.status(400).send('Error fetching group');
    }
  });
  
  // Route to add a member to a group
  router.post('/:id/addMember', async (req, res) => {
    const { userId } = req.body;
  
    try {
      const group = await Group.findById(req.params.id);
      if (!group) {
        return res.status(404).send('Group not found');
      }
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      if (!group.members.includes(user._id)) {
        group.members.push(user._id);
        await group.save();
      }
      res.status(200).json(group);
    } catch (err) {
      console.error('Error adding member:', err);
      res.status(400).send('Error adding member');
    }
  });
  
  module.exports = router;
