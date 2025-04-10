import fs from 'node:fs';

// 1. Read a file (asynchronously)
// fs.asyncFunction(arg1, arg2, ..., callback);
// callback => (err, result) => { ... }

// call stack
// ^
// |
// |
// |                              [log]
// |[readFile]⟳                   [taskData]
// +-----------------------------------------> time
//

fs.readFile('./05-fs.js', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// 2. Read a file (synchronously)
// try { const result = fs.syncFunction(arg1, arg2, ...); } catch (err) { ... }
// call stack
// ^
// |
// |
// |                              [log]
// |[readFileSync                     ]
// +-----------------------------------------> time
//
try {
  const data = fs.readFileSync('./05-fs.js', 'utf-8');
  console.log('File content (sync):', data);
}
catch (err) {
  console.error('Error reading file (sync):', err);
}

// 3. Write a file (asynchronously)
// fs.writeFile('./path/to/file.txt', 'data', (err) => { ... });

// 4. Create a directory (asynchronously)
// fs.mkdir('./path/to/dir', (err) => { ... });

// 5. Delete a file (asynchronously)
// fs.unlink('./path/to/file.txt', (err) => { ... });

// 6. Delete a directory (asynchronously)
// fs.rmdir('./path/to/dir', (err) => { ... });

// 7. Delete some files (asynchronously)
// fs.rm('./path/to/dir', { recursive: true }, (err) => { ... });

// 8. Check if a file exists (asynchronously)
// fs.access('./path/to/file.txt', (err) => { ... });

// 9. Append to a file (asynchronously)
// fs.appendFile('./path/to/file.txt', 'data', (err) => { ... });
