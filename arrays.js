const mon = "mon"
const tue = "tue"
const wed = "wed"
const thu = "thu"
const fri = "fri"
const sat = "sat"
const sun = "sun"

const daysOfWeek = [mon, tue, wed, thu, fri, sat];

//Get Item From Array
console.log(daysOfWeek[5]); // sat
// Add one more day to the array

daysOfWeek.push("sun");

console.log(daysOfWeek);
console.log(daysOfWeek[6]); // sun

daysOfWeek[2] = "water";
console.log(daysOfWeek);  // update
