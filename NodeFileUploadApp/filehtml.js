const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 8080;

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve the HTML form for file upload
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Node+HTML.html'));
});

// Handle file upload
app.post('/fileupload', upload.single('filetoupload'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Bad Request: No file selected!');
  }

  // File uploaded successfully
  res.send('File uploaded and moved!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
