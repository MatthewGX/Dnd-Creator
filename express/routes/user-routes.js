const express = require('express');
const router = express.Router();

var test = [
    {id: 1, name: ['John', 'Doe'], groupIDs: []},
    {id: 2, name: ['Jane', 'Doe'], groupIDs: [1, 2, 3]}
];

// users endpoint to get all users
router.get('/users', (req, res) => {
    const users = [
        {id: 1, name: ['John', 'Doe'], groupIDs: []},
        {id: 2, name: ['Jane', 'Doe'], groupIDs: [1, 2, 3]}
    ]

    res.json(test);
})

const nameParser = (name) => {
    return name.split(" ");
}

// user post endpoint
router.post('/register', (req, res) => {
    const newUser = {
        id: ++test.length,
        name: nameParser(req.body.name),
        groupIDs: []
    };

    test.push(newUser);
    res.json(newUser);
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