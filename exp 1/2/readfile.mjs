//Reading into a file asynchronously and writing code for handling error if file not found to read.
import { readFile } from 'fs/promises';

const filePath = './hello.txt';

async function readMyFile() {     //async function always returns a promise
  try {
    const data = await readFile(filePath, 'utf-8');
    console.log('File contents:', data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Error: File not found!');
    } else {
      console.error('Error reading file:', err);
    }
  }
}

readMyFile();


//errors 1. forgot to make a hello.txt file so i created a file with the name hello.txt
//2.i did not write await before readFile so i added await
//3.some error in catch block so i fixed it like ===