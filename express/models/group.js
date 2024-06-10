const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  members: { type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] }, //An array of member names or IDs, I think we should add user ID as a attribute as a primary key
  createdDate: { type: Date, default: Date.now },
  description: { type: String },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } //the name or user ID of the administrator of the group
});

module.exports = mongoose.model('Group', groupSchema);
