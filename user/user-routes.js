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
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const count = await db.remove(id);

    if (count > 0) {
      res.status(202).json({ message: 'User deleted.' });
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'error removing user' });
  }
});

module.exports = router;
