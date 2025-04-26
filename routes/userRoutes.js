const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  res.json({ message: `User ${name} registered successfully.` });
});

module.exports = router;