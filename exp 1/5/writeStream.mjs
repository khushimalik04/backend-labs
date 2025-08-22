//Write a program that creates a Writable stream to write a string ("Hello, Node.js!") to a file (output.txt).
//If the file already exists, overwrite it. Print a success message once the data is written.

import { createWriteStream } from 'fs';

const filePath = 'output.txt';
const data = 'Hello, Node.js!';

const writeStream = createWriteStream(filePath, { encoding: 'utf-8', flags: 'w' }); // 'w' flag overwrites

writeStream.write(data, (err) => {
	if (err) {
		console.error('Error writing to file:', err);
	}
});

writeStream.end();

writeStream.on('finish', () => {
	console.log('Data written successfully to output.txt');
});

writeStream.on('error', (err) => {
	console.error('Stream Error:', err);
});


//Forgetting writeStream.end() → program keeps running.
//Not handling "error" event → crash on permission issue.