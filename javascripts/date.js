const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);

now.setFullYear(2023);

console.log(now.toDateString()); //Fri Mar 10 2023
console.log(now.toTimeString()); //14:43:07 GMT+0000 (Greenwich Mean Time)
console.log(date1); //Fri May 11 2018 09:00:00 GMT+0100 (British Summer Time)
console.log(date2); //Fri May 11 2018 09:00:00 GMT+0100 (British Summer Time)