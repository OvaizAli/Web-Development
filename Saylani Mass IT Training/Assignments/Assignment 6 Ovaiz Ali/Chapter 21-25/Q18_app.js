/* You have a string“ The quick brown fox jumps over the
lazy dog”.Write a program to count number of
occurrences of word“ the” in given string. */
var text = "The quick brown fox jumps over the lazy dog ";
document.writeln("Text: " + text + " <br> ");
var count = 0;
var arr = text.split(" ");
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "the" || arr[i] === "The") {
        count++;
    }
}
document.writeln("There are " + count + " occurrence(s) of word 'the'");