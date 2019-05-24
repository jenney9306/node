const fs = require('fs');

const readStream = fs.createReadStream('./readme2.txt', {highWaterMark : 16});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log(chunk, chunk.length);
})

readStream.on('end', () => {
    console.log(Buffer.concat(data).toString())
})

readStream.on('end', (err) => {
    console.log(err)
})