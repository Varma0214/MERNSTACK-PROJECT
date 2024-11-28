const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  resume: { type: String, required: true },  
  vendorName: { type: String, required: true },
  technologies: [{ type: String }]
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
