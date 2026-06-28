const http = require('http');
const server = http.createServer((req, res)=>{
    console.log("Someone visited my server.");
    console.log(req.url);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain");

    if(req.url === '/message'){
        res.end("Hello from Node.js Server")
    }else if(req.url === "/about"){
        res.end("Hey I am about page you know ")
    }
    else{
        res.end("Page Not Found");
    }
        

})

server.listen(3000 , ()=>{
    console.log("Server is listening on port 3000")
})