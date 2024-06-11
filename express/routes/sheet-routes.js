const express = require('express');
const router = express.Router();
const CharacterSheet = require('../models/characterSheet');

// Create a new character sheet
router.post('/create', async (req, res) => {
    const {
        name, class: characterClass, background, race,
        alignment, experiencePoints, strength, dexterity,
        constitution, intelligence, wisdom, charisma, owner, attacks, features
    } = req.body;

    console.log(req.body);

    const newCharacterSheet = new CharacterSheet({
        name,
        class: characterClass,
        background,
        race,
        alignment,
        experiencePoints,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        owner,
        attacks,
        features,
    });
    console.log('Printing Sheet:')
    console.log(newCharacterSheet)

    try {
        await newCharacterSheet.save();
        res.status(201).json(newCharacterSheet);
    } catch (err) {
        console.error('Error creating character sheet:', err);
        res.status(400).send('Error creating character sheet');
    }
});

router.patch('/update', async (req, res) => {
    const {
        name, class: characterClass, background, race,
        alignment, experiencePoints, strength, dexterity,
        constitution, intelligence, wisdom, charisma, owner, attacks, features, sheetId
    } = req.body;

    console.log(req.body);

    const sheet = await CharacterSheet.findByIdAndUpdate(sheetId, {
        name: name,
        class: characterClass,
        background: background,
        race: race,
        alignment: alignment,
        experiencePoints: experiencePoints,
        strength: strength,
        dexterity: dexterity,
        constitution: constitution,
        intelligence: intelligence,
        wisdom: wisdom,
        charisma: charisma,
        owner: owner,
        attacks: attacks,
        features: features,
    })

    if (sheet) {
        res.status(201).json(sheet);
    }
    else {
        res.status(400).send('No character sheet found');
    }

    // try {
    //     await newCharacterSheet.save();
    //     res.status(201).json(newCharacterSheet);
    // } catch (err) {
    //     console.error('Error creating character sheet:', err);
    //     res.status(400).send('Error creating character sheet');
    // }
});

// Get all character sheets for a user
router.get('/user/:userId', async (req, res) => {
    try {
        const characterSheets = await CharacterSheet.find({ owner: req.params.userId });
        res.status(200).json(characterSheets);
    } catch (err) {
        console.error('Error fetching character sheets:', err);
        res.status(400).send('Error fetching character sheets');
    }
});

// Get a character sheet by ID
router.get('/:id', async (req, res) => {
    try {
        const characterSheet = await CharacterSheet.findById(req.params.id).populate('owner', 'username');
        if (!characterSheet) {
            return res.status(404).send('Character sheet not found');
        }
        res.status(200).json(characterSheet);
    } catch (err) {
        console.error('Error fetching character sheet:', err);
        res.status(400).send('Error fetching character sheet');
    }
});

module.exports = router;
