const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  groupIDs: { type: [mongoose.Schema.Types.ObjectId], default: [] },
  characterIDs: { type: [mongoose.Schema.Types.ObjectId], default: [] },
  profileCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
