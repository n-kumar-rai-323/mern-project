const http = require("http");
const PORT=3000;
const app = require("./src/config/express.config")
const server= http.createServer(app);

const HOST="192.168.1.66" || "localhost";
server.listen(PORT,HOST,(err)=>{
    if(!err){
       console.log(`Server is running on http://${HOST}:${PORT}`);
    }
    
});