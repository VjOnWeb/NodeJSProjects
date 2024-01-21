// app.js
const express = require('express');
const app = express();
const port = 5050;

// Define a simple endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Your API configuration is working fine!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// http.localhost:5050/api/test