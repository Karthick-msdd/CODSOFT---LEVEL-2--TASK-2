const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  res.send('Job created');
});

router.get('/all', (req, res) => {
  res.send('List of jobs');
});

module.exports = router;
