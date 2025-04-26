const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;
  res.json({ reply: `Aunty Bola says: Keep saving and investing wisely! (Echo: ${message})` });
});

module.exports = router;