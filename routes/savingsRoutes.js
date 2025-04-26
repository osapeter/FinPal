const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Savings Circle information will be here.' });
});

module.exports = router;