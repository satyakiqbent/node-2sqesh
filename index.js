// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
console.log('1.............');
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
console.log('2.............');
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
console.log('3.............');
const theBigDay = new Date('July 1, 1999');
const sameAsBigDay = new Date();
console.log(sameAsBigDay.setTime(theBigDay.getTime()));
//////////////////////////////////
console.log(Date.parse('Wed, 09 Aug 1995 00:00:00'));
//////////////////////////////////
console.log('4.............');
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date('2/1/22'); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
console.log(date.setYear(98));
console.log(date.toString()); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
console.log(date.setYear(22));
console.log(date.toString()); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
/////////////////////////////////
console.log('5.............');
console.log(Date.now());
const date2 = new Date(99, 5, 24);
console.log(date2);
/////////////////////////////////
console.log('6.............');
const today = new Date();
const birthday1 = new Date('December 17, 1995 03:24:00'); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date('1995-12-17T03:24:00'); // This is ISO-8601-compliant and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp
console.log(birthday1);
console.log(birthday2);
console.log(birthday3);
console.log(birthday4);
console.log(birthday5);
let date3 = new Date();
console.log('The date is: ', date3);
console.log('7.............');
let date4 = new Date(5000);
console.log('The date is: ', date4);

let date5 = new Date('2019/8/25');
console.log('The date is: ', date5);

let date6 = new Date(2019, 5, 10, 6, 40, 21, 2);
console.log('The date is: ', date6);
console.log('8.............');
// The setDate() method can also be used to add days to a date:

const d1 = new Date();
const d2 = d1.setDate(d1.getDate() + 50);
console.log(d2);
