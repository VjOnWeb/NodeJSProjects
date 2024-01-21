var http = require('http'); // Http module
var dt = require('./myModule');  // From Another Js File
var url = require('url'); // import Url module
var fs = require('fs');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime() + "<br>");
  res.write("<h3>1</h3>------------------------------------------------------------------------<br>")
  res.write(req.url + "<br>");
  /* Var */
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write("<h3>2</h3>------------------------------------------------------------------------<br>")
  res.write(txt + "<br>")
  res.write("<h3>3</h3>------------------------------------------------------------------------<br>")
  /* Trying To Fetch the HTML Content */
  fs.readFile('demofile.html', function(err, data){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(data);
    return res.end();
  }); 
  res.end('Hello World!!!!!');
}).listen(8292); 

/* http://localhost:8292/year=2022&month=June */