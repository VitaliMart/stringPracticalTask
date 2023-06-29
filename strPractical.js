// 1. Given the string 'ahb acb aeb aeeb adcb axeb'.
//   Write a regular expression that matches the strings ahb, acb, aeb by pattern:
//   letter 'a', any character, letter 'b'

let str = 'ahb acb aeb aeeb adcb axeb';
console.log(str.match(/a.b/g).join());

// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

let str2 = '2 + 3 223 2223';
console.log(str2.match(/\d\s.\s\d/g).join());

// 3. Get the day, month and year of the current date and output it to the console separately

console.log(new Date().toLocaleDateString());