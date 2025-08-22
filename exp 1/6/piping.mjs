// Approach:
// 1. Use createReadStream to read from input.txt.
// 2. Use createWriteStream to write to output.txt.
// 3. Pipe the readable stream to the writable stream.
// 4. Handle errors for both streams (e.g., file not found, permission denied).
// 5. Print a success message when piping is complete.


// - input.txt does not exist (ENOENT)
// - Permission denied to read or write files (EACCES)
// - Disk full or other I/O errors
// - Stream errors (e.g., file locked)

import { createReadStream, createWriteStream } from 'fs';

const inputFile = 'input.txt';
const outputFile = 'output.txt';

const readStream = createReadStream(inputFile, { encoding: 'utf-8' });
const writeStream = createWriteStream(outputFile, { encoding: 'utf-8' });

readStream.pipe(writeStream);

readStream.on('error', (err) => {
	console.error('Read Stream Error:', err.message);
});

writeStream.on('error', (err) => {
	console.error('Write Stream Error:', err.message);
});

writeStream.on('finish', () => {
	console.log('Piping complete: Data copied from input.txt to output.txt');
});
//Write a program that demonstrates stream piping. Use a Readable stream to read data from a file (input.txt),
//  and pipe it to a Writable stream that writes to another file (output.txt). give me code for this along with 
// this my evaluation will be based on no of errors and approach so write me the errors in comments and the
//  approach in comments at tiop