const router = require('express').Router();

const db = require('./user-model');

// get all
router.get('/', async (req, res) => {
  try {
    const users = await db.getAll();

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(400).json({ message: 'No users found.' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// create
router.post('/', async (req, res) => {
  const newUser = req.body;

  try {
    const user = await db.add(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// delete

module.exports = router;
router.post('/', async (req, res) => {
  try {
    const hub = await Hubs.add(req.body);
    res.status(201).json(hub);
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error adding the hub'
    });
  }
});
