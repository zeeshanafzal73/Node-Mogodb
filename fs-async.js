const { readFile, writeFile } = require('fs');

readFile('./content/second.txt', (err, result) => {
 if (err) {
    console.log(`Error: ${err}`);
    return;
 }

 const first = `Result: ${result}`;
 readFile('./content/subfolder/first.txt', (err, result) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }

    const second = `Result: ${result}`;
    writeFile('./content/result-async.txt', `Hello this is result: ${first} , ${second}`, (err) => {
      if (err) {
        console.log(`Error: ${err}`);
        return;
      }
      console.log('File has been saved.');
    });
 });
});