var http =require('http')
var fs = require('fs');  // File System module

var htmlCode= "<html lang=\"en\">\r\n"
                    + "<head>\r\n"
                    + "    <meta charset=\"UTF-8\">\r\n"
                    + "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n"
                    + "    <link rel=\"stylesheet\" href=\"./tail-style.css\">\r\n"
                    + "        <title>Demo Doc</title>\r\n"
                    + "</head>\r\n"
                    + "<body>\r\n"
                    + "    <h1 class=\"text-4xl font-bold text-center \"> Hi Sample File</h1>\r\n"
                    + "    <p class=\"text-blue-500\"  style=\"color: rgb(5, 83, 162);\"> This is a Sample Text Inside the Sample Html</p>\r\n"
                    

                    + "</body>\r\n"
                + "</html>"
/* */

http.createServer(function (req,res){
   
    /*The fs.open() method takes a "flag" as the second argument,
      if the flag is "w" for "writing", the specified file is opened for writing.
      If the file does not exist, an empty file is created: */
     fs.open('newFile1.txt', 'w', function (err) {
        if (err) throw err;
        console.log('Saved!');
      }); 

      /*The fs.writeFile() method replaces the specified file and content if it exists.
       If the file does not exist, a new file, containing the specified content, will be created: */
 
      fs.writeFile('newFile1.txt', htmlCode, function(err){
        if (err) throw err;
        console.log("Written");
      });
   
/* The fs.readFile() method is used to read files on your computer.*/
      fs.readFile('demofile.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end( "<br>endd");
      }); 
/* The fs.writeFile() method replaces the specified file and deletes previous content:*/
      fs.writeFile('demofile.html', htmlCode+'<h3 class="font-bold">Hello Content</h3>', function(err){
        if(err) throw err ;
        console.log("Updated")
      });

/*The fs.appendFile() method appends the specified content at the end of the specified file: */
 // Keeeps on Adding for each Call <h2> Appended Text End</h2><h2> Appended Text End</h2><h2> Appended Text End</h2><h2> Appended Text End</h2>
    /* fs.appendFile('demofile.html', '<h2> Appended Text End</h2>', function(err){
       if(err) throw err ;
       console.log("Updated")
     });
*/      

     /* Delete File*/
 /*    fs.unlink('newFile1.txt',function(err){
        if(err) throw err;
        console.log("File Deleted");

     });
  */ 
     
     /*Rename */
   /*  fs.rename('newFile1.txt', 'newFile1.html',function(err){
        if(err) throw err;
        console.log("File Renamed");
     });
     */
}).listen(9292);

/* http://localhost:9292 */