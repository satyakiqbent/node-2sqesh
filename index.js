// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
console.log(parseInt('-15', 10));
// Depending on timezone, your results will vary
const date1 = new Date();

console.log(date1[Symbol.toPrimitive]('string'));
// Expected output: "Wed May 24 2023 19:05:51 GMT+0530 (India Standard Time)"

console.log(date1[Symbol.toPrimitive]('number'));
// Expected output: 1576833480000
console.log(date1[Symbol.toPrimitive]('default'));
// Expected output: "Wed May 24 2023 19:05:51 GMT+0530 (India Standard Time)"
//////////////////////////////////
console.log('/////////////////////////////');
const launchDate = new Date('July 1, 1999, 12:00:00');
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary
//////////////////////////////////
console.log('/////////////////////////////');
const theBigDay = new Date('July 1, 1999');
const sameAsBigDay = new Date();
console.log(sameAsBigDay.setTime(theBigDay.getTime()));
//////////////////////////////////
console.log(Date.parse('Wed, 09 Aug 1995 00:00:00'));
//////////////////////////////////
console.log('/////////////////////////////');
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date('2/1/22'); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
console.log(date.setYear(98));
console.log(date.toString()); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
console.log(date.setYear(22));
console.log(date.toString()); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
/////////////////////////////////
console.log('/////////////////////////////');
console.log(Date.now());
const date2 = new Date(99, 5, 24);
console.log(date2);
