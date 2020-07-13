'use strict';
const fs = require('fs'); // File System
const readline = require('readline');
const rs = fs.createReadStream('./popu-pref.csv');
const rl = readline.createInterface({input: rs, output: {} });
rl.on('line', lineString => {
    console.log(lineString);
});