let day = "Tuesday";
console.log(day);
let subDay = day.slice(0, 4);
console.log(subDay); //Tues
console.log(day[1]); //u

let splitDay = day.split("s");
console.log(splitDay[0]); //Tue
console.log(splitDay[1]); //day

let date = "23";
let nextDate = "27";
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff); //4
diff.toString();

let newQuote = day+"is funday";
let  val = newQuote.indexOf("day",5);
console.log(val); //13

let value = newQuote.indexOf("day");
let count=0;
while(value !== -1){
    count++;
    value = newQuote.indexOf("day",value+1);
}
console.log("there are "+count+" times \'day\' word ");