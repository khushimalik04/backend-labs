//Write a program that uses a Readable stream to read data from a file (data.txt). 
//Output the file content to the console. Ensure the file exists before reading, and handle any errors if the file is missing.

import { createReadStream, access, constants } from 'fs';

const filePath = "data.txt";

// Check file before reading
access(filePath, constants.F_OK, (err) => {
  if (err) {
    console.error("Error: data.txt does not exist!");
  } else {
    const readStream = createReadStream(filePath, "utf-8");
    readStream.on("data", (chunk) => console.log("Chunk:", chunk));
    readStream.on("end", () => console.log("File reading completed."));
    readStream.on("error", (error) => console.error("Stream Error:", error));
  }
});


//forgit to import fs as whole so reference error
//Not handling "error" event
