const http = require("http");
const PORT=3000;

const server= http.createServer((req,res)=>{
    res.end("Hello World");
});

const HOST="192.168.1.66" || "localhost";
server.listen(PORT,HOST,(err)=>{
    if(!err){
       console.log(`Server is running on http://${HOST}:${PORT}`);
    }
    
});