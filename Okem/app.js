var http = require("http");
var fs = require("fs");
var path = require('path');
var data = req.body;

http.createServer(function(req, res) {
   console.log(req, res);
   fs.readFile(path.join(__dirname, '', 'index.html'), 'utf8', (err, data) =>{
     if (err) throw err;
     res.end(data)
   }
   )
   fs.writeFile(
    path.join(__dirname, '/message', 'message.txt'), 'data'
  );
   if (req.method === 'POST') {
     let body = '';
     req.on('data', chunk => {
       body += chunk.toString();
     })
     req.on('end', () => {
      fs.appendFile(
        path.join(__dirname, '/message', 'message.txt'), 'data'
      );
     })
   }
   
 })
 .listen(8080, ()=> {console.log('server running....')});
