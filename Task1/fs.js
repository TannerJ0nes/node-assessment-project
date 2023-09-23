// Import the 'fs' module
const fs = require('fs');

// Create a sample text file
fs.writeFileSync('sample.txt', 'Hello, File System in Node.js!\n');

// Read the contents of the file asynchronously
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Log file contents
  console.log('File contents:');
  console.log(data);
});

// Delete the file
fs.unlinkSync('sample.txt');
