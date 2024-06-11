const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Group = require('../models/group');
const User = require('../models/user');
const CharacterSheet = require('../models/characterSheet');


router.post('/create', async (req, res) => {
    // const { groupName, description } = req.body;
  const groupName = req.body.groupName;
  const description = req.body.description;
  const admin = JSON.parse(req.body.admin);

  console.log(admin);

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
        groupName: groupName,
        members: [admin._id],
        description: description,
        admin: admin._id
      });
      console.log('Printing Group:')
      console.log(newGroup)
  
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
  
      if (group.members.some((member) => member == userId)) {
        return res.status(404).send('User already in Group');
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

  router.patch('/promote', async (req, res) => {
    const groupId = req.body.groupId;
    const userId = req.body.userId;

    const group = await Group.findByIdAndUpdate(groupId, {admin: userId});

    if (group) {
      res.status(200).json(group);
      // group.save();
    }
    else {
      res.status(404).send('Group not found');
    }
  });

  router.patch('/removeUser', async (req, res) => {
    const groupId = req.body.groupId;
    const userId = req.body.userId;

    const group = await Group.findById(groupId);

    if (group) {
      group.members = group.members.filter((member) => member != userId);
      group.save();

      res.status(200).json(group);
    }
    else {
      res.status(404).send('Group not found');
    }

  });
  
  // Route to add a member to a group
  router.post('/:id/addSheet', async (req, res) => {
    const { sheetId } = req.body;
  
    try {
      const group = await Group.findById(req.params.id);
      if (!group) {
        return res.status(404).send('Group not found');
      }
  
      if (group.sheets.some((member) => member == sheetId)) {
        return res.status(404).send('Sheet already in Group');
      }

      const sheet = await CharacterSheet.findById(sheetId);
      if (!sheet) {
        return res.status(404).send('Sheet not found');
      }
  
      if (!group.sheets.includes(sheet._id)) {
        group.sheets.push(sheet._id);
        await group.save();
      }
      res.status(200).json(group);
    } catch (err) {
      console.error('Error adding sheet:', err);
      res.status(400).send('Error adding sheet');
    }
  });
  
  module.exports = router;
