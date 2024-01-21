// backend.js
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5858;

app.use(bodyParser.json());

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// API endpoints
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully!');
});

app.get('/images', (req, res) => {
  fs.readdir('uploads/', (err, files) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(files);
  });
});

// API endpoint to delete an image
app.delete('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join('uploads', filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Image deleted successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
