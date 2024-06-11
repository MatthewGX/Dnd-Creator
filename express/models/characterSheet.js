const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSheetSchema = new Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    background: { type: String, required: true },
    race: { type: String, required: true },
    alignment: { type: String, required: true },
    experiencePoints: { type: Number, required: true, default: 0 },
    strength: { type: Number, required: true, default: 10 },
    dexterity: { type: Number, required: true, default: 10 },
    constitution: { type: Number, required: true, default: 10 },
    intelligence: { type: Number, required: true, default: 10 },
    wisdom: { type: Number, required: true, default: 10 },
    charisma: { type: Number, required: true, default: 10 },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    attacks: { type: String, required: true },
    features: { type: String, required: true },
});

module.exports = mongoose.model('CharacterSheet', characterSheetSchema);
