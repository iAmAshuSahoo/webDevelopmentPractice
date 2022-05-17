const http = require('http');
const fs = require('fs');

let content = fs.readFileSync("../2_css/advancedCSS/tut34boxShadowTextShadow.html");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(content);
});

server.listen(8000,"127.0.0.1", () => {
    console.log("Listening to server 127.0.0.1 on port 8000")
})