const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Box Model</title>
      <style>
          /* universal selector */
          *{
              box-sizing: border-box;
              margin: 0px;
              padding:0px;
          }
          body{
              background-color: #96a5dc;
          }
          .container {
              background-color: rgb(236 216 216);
              border: 2px solid #0fc1b9;
              /* padding-left:9px;
              padding-top:30px; */
              /* padding: 20px 30px 40px 50px; padding top right bottom left */
              padding: 34px 19px;/* padding y(top/bottom) x(left/right) */
              margin: 14px 19px;
              border-radius: 43px;
              width:500px;
              
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <h3>This is my heading</h3>
          <p id="first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum omnis ab voluptas
              necessitatibus? Ut, aliquam quis et reiciendis assumenda eius pariatur magnam.</p>
      </div>
      <div class="container">
          <h3>This is my heading</h3>
          <p id="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum omnis ab voluptas
              necessitatibus? Ut, aliquam quis et reiciendis assumenda eius pariatur magnam.</p>
  
      </div>
      <div class="container">
          <h3>This is my heading</h3>
          <p id="third">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum omnis ab voluptas
              necessitatibus? Ut, aliquam quis et reiciendis assumenda eius pariatur magnam.</p>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});