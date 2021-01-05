const express=require('express');
const app =express();
app.use(express.static('public'));
const port=process.env.PORT || 5000;
app.listen(port,function(){
    console.log("Listening at port 5000!");
});
app.get('/',function(req,res){
    res.sendFile('index.html')
})
  


/*var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var port=process.env.PORT || 5000;


http.createServer(function(req,res){

    var q =url.parse(req.url,true);
    var filename1="." + q.pathname;
    var filename="index.html"
    if(filename1=="./impressum.html"){
        filename=filename1;
    }
    
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type' : 'text/html'});
           return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(data);
        //res.write(uc.upperCase("Hello Carelle"));
        
       
        return res.end();
    });
   
}).listen(port);
console.log("Hi carelle");
*/







