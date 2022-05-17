// console.log("Hello World");

// Type node on the console to start Node REPL(Read Evaluate Print Loop)
// We can execute individual operations. 
// _ underscore saves the last value.
// .exit to exit the Node REPL

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


// Printing Hello World
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

//Plain HTML when text/plain
//Renders Page when text/HTML
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Animations</title>
        <style>
            .container {
                background-color: yellow;
            }
            .card {
                width: 100px;
                height: 100px;
                border: 2px solid black;
                background-color: green;
                position: relative;
                animation-name: loading;
                animation-name: loading-bar;
                animation-duration: 3s;
                animation-iteration-count: 1;
                /* animation-iteration-count: infinite; */
                animation-fill-mode:forwards;
                /* animation-delay: 3s; */
                /* animation-timing-function: ease-out;
                animation-direction:reverse; */
    
                    /* Shorthand
                animation: animation: name duration timing-function delay iteration-count direction fill-mode;; */
            }
            
            @keyframes loading {
                0% {
                    top: 200px;
                    left: 100px;
                }
                25% {
                    top: 20px;
                    left: 150px;
                }
                50% {
                    top: 200px;
                    left: 200px;
                }
                75% {
                    top: 100px;
                    left: 125px;
                }
                100% {
                    top: 100px;
                    left: 175px;
                }
            }
            @keyframes loading-bar {
                from {
                    width: 50px;
                }
                to {
                    width: 500px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="card"></div>
        </div>
    </body>
    </html>`);
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
