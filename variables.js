const birthYear = 1992;
var futureYear = 2030;
var possibleAge1 = futureYear - birthYear;
var possibleAge2 = futureYear - birthYear - 1;

console.log('You were born in ' + birthYear + ' and in the year ' + futureYear + ' you will be either ' + possibleAge1 + ' or ' + possibleAge2 + ' years old.')

var currentAge = 27;
var maximumAge = 30;
var amountPerDay = 1;
var yearsOfLife = maximumAge - currentAge;
var now = new Date().getFullYear();
var endYear = now + yearsOfLife;
var numberOfDays = 0;
//Account for leap years as well
for (let index = now+1; index <= endYear; index++) {
    if (index%4 == 0) {
        numberOfDays += 366;
    } else {
        numberOfDays += 365;
    }    
}
var total = amountPerDay * numberOfDays;

console.log('You will need ' + total + ' to last you until the ripe old age of '+ maximumAge);