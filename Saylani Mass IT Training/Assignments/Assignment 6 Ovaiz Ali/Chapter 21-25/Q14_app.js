/* You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable“ search by user input” in an
array.After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform
case insensitive search.Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. */
var A = ["cake", "apple pie", "cookie", "chips", "patties"],
    i, flag = 0,
    index = 0;
var input = prompt("Welcome to ABC Bakery. What do you want to order si/ma'am");
for (i = 0; i < A.length; i++) {
    if (A[i] === input.toLowerCase()) {
        flag = 1;
        index = i;
    }
}
if (flag === 1) {
    document.writeln(input.toLowerCase() + " is available at index " + index + " in our bakery");
} else {
    document.writeln("We are sorry. " + input.toLowerCase() + " is not available in our bakery");
}