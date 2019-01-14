// Creating an array w/ 5 numbers
// Prompting the user to input a number to print the length of the array
// Then alerting the user of the array form 0 to their input.

var numbers = [5, 10, 15, 20,25];
var index = parseInt(prompt("Determine a number 0-4 to choose the length of  the array."));

for (var i=0; i <= index;i++ )
{
    console.log(numbers[i]);
}
