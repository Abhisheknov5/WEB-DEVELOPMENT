/*
const fs = require('fs');
function nodeStyleCallback(err,data){
    if(err){
        console.log("There was an error",err);
        return;
    }
    console.log(data);
    
}
fs.readFile("/some/file/that/does-not exist",nodeStyleCallback);
fs.readFile('/some/file/that/does-exist', nodeStyleCallback);
*/

// Import the 'fs' module, which provides an API for interacting with the file system
const fs = require('fs');

// Define a callback function to handle the results of the readFile operation
function nodeStyleCallback(err, data) {
    // Check if an error occurred during the file read operation
    if (err) {
        // Log the error message to the console
        console.log("There was an error", err);
        return; // Exit the function to avoid further processing
    }
    // Log the data read from the file to the console if no error occurred
    console.log(data);
}

// Attempt to read a file that does not exist
// The nodeStyleCallback function will handle the result
fs.readFile("/some/file/that/does-not-exist", nodeStyleCallback);

// Attempt to read a file that exists
// The nodeStyleCallback function will handle the result
fs.readFile('/some/file/that/does-exist', nodeStyleCallback);
