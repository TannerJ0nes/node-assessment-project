// Import the 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set HTTP response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response message
  res.end('Hello, Node.js HTTP Server!\n');
});

// Listen on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
