var firstName = "Samuel";
var lastName = "Correa";

var myFirstName = "Santi";
var myLastName = "Lopez";

var myStr = "I am a \"double quoted\" string inside \"double quotes\""; //Obviously wrong 

//console.log(myStr); //output: I am a "double quoted" string inside "double quotes"

var myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
var myStr3 = `<a href="http://www.example.com" target="_blank">Link</a>`;

/*** 
CODE OUTPUT
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
***/

var myStr4 = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr4);

var ourStr = "I come first." + "I come second.";


var myString = "This is the start. " + "This is the end";
//console.log(myString);

var ourString = "I come first ";
ourString += "I come second";
console.log(ourString);

var firstNameLength = 0;
var firstName2 = "Ada";

firstNameLength = firstName2.length;

var lastNameLength = 0;
var lastName2 = "Lovelace";


lastNameLength = lastName2.length;
console.log(lastNameLength);

var firstLetterOfFirstName = "";
var firstName3 = "Ada";

firstletterOfFirstName = firstName3[0];
console.log(firstLetterOfFirstName);

var myString2 = "Jello World";

// myString2[0] = "H"; //Fix me

myString2 = "Hello World"; // Strings are Immutable

var firstName4 = "Ada";
var lastLetterOfFirstname4 = firstName4[firstName4.length - 1];


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {

    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + " .";

    return result;

}

console.log(wordBlanks("dog", "big", "ran", "quickly"));