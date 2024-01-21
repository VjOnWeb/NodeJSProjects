/*Not working*/

const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (files.filetoupload) {
        const oldpath = files.filetoupload.path;
        const newpath = 'uploads/' + files.filetoupload.name;

        fs.rename(oldpath, newpath, (err) => {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request: No file selected!');
      }
    });
  } else {
    // Serve the HTML form for file upload
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit" value="Upload File">');
    res.write('</form>');
    res.end();
  }
});

const port = 9898;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
