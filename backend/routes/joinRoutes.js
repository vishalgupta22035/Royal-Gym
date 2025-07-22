const express = require('express');
const router = express.Router();
const JoinRequest = require('../models/JoinRequest');

// POST /api/join
router.post('/', async (req, res) => {
  try {
    const { name, email, goal, plan } = req.body;
    const newRequest = new JoinRequest({ name, email, goal, plan });
    await newRequest.save();
    res.status(201).json({ message: 'Join request submitted successfully' });
  } catch (err) {
    console.error('Error saving join request:', err);
    res.status(500).json({ message: 'Failed to submit request' });
  }
});

module.exports = router;
