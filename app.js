'use strict';
const fs = require('fs'); // File System
const readline = require('readline');
const rs = fs.createReadStream('./popu-pref.csv');
const rl = readline.createInterface({input: rs, output: {} });
rl.on('line', lineString => {
    const  columns = lineString.split(',');
    const year = parseInt(columns[0]);
    const prefecture = columns[1];
    const popu = parseInt(columns[3]);
});