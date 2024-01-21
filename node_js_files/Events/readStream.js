var fs = require('fs');
var rs = fs.createReadStream('./newFile1.txt');

rs.on('open', function(){
    console.log("The File is Open..")
});