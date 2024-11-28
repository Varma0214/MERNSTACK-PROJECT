require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const resourceRoutes = require('./routes/resource');
const vendorRoutes = require('./routes/vendor');
const cors = require('cors');


const app = express();
app.use(cors());
require("./models/db")
app.use(express.json());
app.use('/api/resources', resourceRoutes);
app.use('/api/vendors', vendorRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
