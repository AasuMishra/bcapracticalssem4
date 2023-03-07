const http =require("http")
const fs=require("fs")
 
const server=http.createServer(function(req,res){
 fs.readFile("index.html",function(err,data){
    if(err){
        res.statusCode=400
        console.log(err)
    }else{
    res.writeHead(200,{'Content-Type':'html/text'})
    res.write(data)
    }res.end()
 });
}).listen(8094);