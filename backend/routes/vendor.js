const express = require('express');
const Vendor = require('../models/Vendor');
const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    
    const newVendor = new Vendor({ name: req.body.name });
    await newVendor.save();

    res.status(201).json({ message: 'Vendor added successfully!' });
  } catch (err) {
    console.error("Error while saving vendor:", err);
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
    try {
      const vendors = await Vendor.find(); 
      res.json(vendors); 
    } catch (err) {
      console.error("Error fetching vendors:", err);
      res.status(500).json({ error: 'Error fetching vendors' });
    }
  });

module.exports = router;
