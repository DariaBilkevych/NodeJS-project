const { readFileSync, writeFileSync } = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt');
const second = readFileSync('./content/second.txt');

writeFileSync('./content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');