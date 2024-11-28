const express = require('express');
const multer = require('multer');
const Resource = require('../models/Resource'); 
const router = express.Router();


const upload = multer({ dest: 'uploads/resumes/' });


router.post('/add', upload.single('resume'), async (req, res) => {
  console.log('Request Body:', req.body);  
  console.log('Uploaded File:', req.file);
  
  try {
    const newResource = new Resource({
      fullName: req.body.fullName,  
      resume: req.file ? req.file.path : '',  
      vendorName: req.body.vendorName,  
      technologies: req.body.technologies ? JSON.parse(req.body.technologies) : [],
    });

    await newResource.save(); 
    res.status(201).json({ message: 'Resource added successfully!' });
  } catch (error) {
    console.error('Error saving resource:', error);
    res.status(400).json({ error: 'Error saving resource' });
  }
});
router.get('/', async (req, res) => {
    try {
      
      const resources = await Resource.find(); 
      res.json(resources);  
    } catch (error) {
      console.error("Error fetching resources:", error);  
      res.status(500).json({ error: 'Error fetching resources.' });  
    }
  });

module.exports = router;
