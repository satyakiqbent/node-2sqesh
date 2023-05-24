// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
console.log(parseInt('-15', 10));
// Depending on timezone, your results will vary
const date = new Date();

console.log(date[Symbol.toPrimitive]('string'));
// Expected output: "Wed May 24 2023 19:05:51 GMT+0530 (India Standard Time)"

console.log(date[Symbol.toPrimitive]('number'));
// Expected output: 1576833480000
console.log(date[Symbol.toPrimitive]('default'));
// Expected output: "Wed May 24 2023 19:05:51 GMT+0530 (India Standard Time)"
