var url = require('url')

var addr = "http://localhost:8292/index.htm?year=2022&month=June"
var q = url.parse(addr, true);

console.log("Host name : " + q.host);
console.log("Path name : " + q.pathname);
console.log("Search Query : " + q.search);
var qdata  = q.query;
console.log("Query parsed: Year = " + qdata.year + "\n Month = " + qdata.month)