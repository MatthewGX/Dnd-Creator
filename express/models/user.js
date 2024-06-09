const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  groupIDs: { type: [Number], default: [] },
  characterIDs: { type: [Number], default: [] },
  profileCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
