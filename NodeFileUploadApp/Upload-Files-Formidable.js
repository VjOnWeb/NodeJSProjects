var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  console.log(req);  // Add this line for debugging purposes

  if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      // Check if the file field exists in the form
      if (!files.filetoupload || !files.filetoupload.path) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.write('Bad Request: No file selected!');
        res.end();
        return;
      }

      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/ADMIN/' + files.filetoupload.originalFilename;

      fs.rename(oldpath, newpath, function (err) {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.write('Internal Server Error');
          res.end();
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    // Return a simple HTML form for file upload
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
