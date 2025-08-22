//Reading a text file on the server using http and fs module
import http from 'http';
import { readFile } from 'fs';

const PORT = 3000;
const filePath = './hii.txt';

const server = http.createServer((req, res) => {
  readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


//Using res.write(data) but forgetting res.end().
