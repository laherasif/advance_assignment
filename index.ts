// Question number=2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var username: string="gujjar";
console.log(username," would you like to learn some Python today?");

// Question number=3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var personName:string= "ali haider gujjar"
console.log("person's name in lowercase :",personName.toLowerCase());
console.log("person's name in uppercase :",personName.toUpperCase());

// Question number=4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

var num:string='“A person who never made a mistake never tried anything new.”';
console.log("Albert Einstein once said, ",num);

// Question number=5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

var famousPerson:string= "Javad Ahmad Ghamidi";
var sum:string="A person who never made a mistake."
console.log(famousPerson,"once said, ",sum);

// Question number=6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store a person's name with some whitespace characters
let num1 = "\tAlice \n";
console.log(`Name with Whitespace:${num1}`);
 
// Question number=7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(5 + 3);
// Subtraction
console.log(10 - 2);
// Multiplication
console.log(4 * 2);
// Division
console.log(16 / 2);

// // Question number=8
// You should create four lines that look like this:

console.log(5 + 3)
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Question number=9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var Number1:number= 372;
var Print:string=` My favorite number is ${Number1}.`;
console.log(print);

// Question number=10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

var Number1:number= 372;
var Print:string=` My favorite number is ${Number1}.`;
console.log(print);


// Question number=11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendsName:string[]=["ali","bader", "abdul ahid","sajjad","M zad", "ahmad"]
var sum3=0;
for (sum ; sum3 < friendsName.length; sum3++){
    console.log(friendsName[sum3]);}

// Question number=12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names: string[] = ["ali","bader", "abdul ahid","sajjad","M zad", "ahmad"];
for (var i=0;i<names.length;i++){
  var Message = `Hello, ${names}! I hope you're having a great day.`;
  console.log(Message);
}

// Question number=13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var carsname:string[]=["Honda", "Toyota", "BMW", "Tesla", "Ford"]
for (let index = 0; index < carsname.length; index++) {
    const element = carsname[index];
}

// Question number=14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var gustnames:string[]=["abdel ahid","M zad","bader"]
for (var index = 0; index < gustnames.length; index++) {
    var message=`hallo, ${gustnames}You are cordially invited to join me for dinner. It would be an honor to have you as my guest`
    console.log(message);
  }

// Question number=15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
console.log(`${gustnames[2]} is not availabe`);
gustnames.splice(gustnames.indexOf("bader"),1 ,"Ali");
console.log(gustnames);

// Question number=16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Original guest list
gustnames.unshift("Haider");
gustnames.splice(2,0,"Hassan");
gustnames.push("Talha")
console.log(gustnames);

// Question number=17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for(var i=gustnames.length-1; i>=0;i--){
  if(i>1){
    console.log("We are sorry ", gustnames.pop());
  }
  else{
    console.log("you are still invired", gustnames.pop()); 
  }
}
console.log(gustnames);

// Question number=18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

var gustnames:string[]= ['Haider', 'abdel ahid', 'Hassan', 'M zad', 'Ali', 'Talha'];
console.log(gustnames);
let modifyArray=[...gustnames].sort();
console.log("sorted arrray",modifyArray);
 console.log("original array",gustnames);
console.log("array in reverse alphabetical order without changing the order of the original list",[...gustnames].reverse());
console.log("Show that your array is still in its original order by printing it again",gustnames);
console.log("everse the order of your list again",gustnames.reverse());
console.log("Print the list to show it's back to its original order",gustnames.reverse());
console.log("stored in alphabetical order",gustnames.sort());
console.log("stored in reverse alphabetical order",gustnames.reverse());

// Question number=19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("people you are inviting to dinner",gustnames.length);

// Question number=20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

var country:string[]=["Pakistan","india","Afganistan","Iran","Sudia Arabia","Iraq",];
for (var index = 0; index < country.length; index++) {
    console.log(country[index]);
}

// Question number=21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 var itemObject={
  Name:"ali haider",
  Age:19,
  isStudent:true,
};
console.log(itemObject);

// Question number=22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits[3]);
var index = 2;
if (index >= 0 && index < fruits.length) {
}

// Question number=23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//1
var age:number= 15;
console.log(age< 20);
console.log(age>20);


// 2
var countryname:string="pakistan";
console.log(countryname == "pakistan");
console.log(countryname == "india");


// 3
var sum1:number=10;
var sum2:number=20;
console.log(sum1<sum2);
console.log(sum1>sum2);


// 4
var isLearning:string="Yes";
console.log(isLearning == "Yes");
console.log(isLearning < "yes");


// 5
var month:string= "Jun";
console.log(month == "Jun");
console.log(month == "July");

// Question number=24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var string1 = "hello"; 
var string2 = "world";
var string3 = "hello";
console.log(string1 == string2); 
console.log(string1 !== string3); 

var text = "Hello World";
console.log(text.toLowerCase() === "hello world");

var number = 5;
var Number1 = 10;
console.log(number === Number1);
console.log(number !== Number1);
console.log(number > Number1);  
console.log(number < Number1);
console.log(number >= Number1);
console.log(number <= Number1);

var a = 5;
const b = 10;
console.log(a > 3 && b < 15);
console.log(a > 7 || b < 5);

// Question number=25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

var color: string = 'green';
if (color === 'green') {
    console.log("Player just earned 5 points!");
}
var colors: string = 'red';

if (colors === 'green') {
    console.log("Player just earned 5 points!");
}

// Question number=26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

var alien_Color = 'red'
if (alien_Color = 'green') {
    console.log(`Mr. ${alien_Color} just earned 5 points.`);
  }
  else {
    console.log(`Mr. ${alien_Color} just earned 10 points.`);
  }

// Question number=27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien
var string = "ali haider"
var alienColor: string = 'green';
var alienColor2: string = 'red';
var alienColor3: string = 'yellow';

if (alienColor === 'green') {
  console.log(`Mr. ${alienColor} has earned 5 points for shooting the green alien.`);
} 
else if (alienColor === 'yellow') {
  console.log(`Mr. ${alienColor} has  earned 10 points for shooting the yellow alien.`);
} 
else if (alienColor === 'red') {
  console.log(`Mr. ${alienColor} has earned 15 points for shooting the red alien.`);
}

// Question number=28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// var age: number = 55;

if (age< 2 ){
    console.log(`The person is a baby`)
}
if (age >= 2 && age < 4 ){
    console.log(`The person is a toddler`)
}
if (age >= 4 && age < 13 ){
    console.log(`The person is a kid`)
}
if (age >= 13 && age < 20 ){
    console.log(`The person is a teenager`)
}
if (age >= 20 && age < 65 ){
    console.log(`The person is an adult`)
}
if (age > 65 ){
    console.log(`The person is elder`)
}
// Question number=29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!



// Question number=30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userNames: string[] = ["abdel ahid","M zad","bader"];
for (let i=0; i<userNames.length; i++ ){
    if (userNames[i] === "Admin"){
        console.log(`Hello admin, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
// Question number=31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userName: string[] = ["Admin", "Eric", "John"];
userNames.splice(0, 3);
console.log(userNames);
if (userName = []){
    console.log(`We need to find some users`)
}

// // Question number=32
// // Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// // • Make a list of five or more usernames called current_users.
// // • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// // • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// // • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

var current_users:string[] = ["ali", "ahmed", "raza", "haider", "zaid"]
var new_users:string[] = ["hassan", "saad", "abdullah", "ali", "badar"]
for(var i=0; i<new_users.length; i++){
  for(var j=0; j<new_users.length; j++){
    if(new_users[i] == current_users[j]){
      console.log(new_users[i],"username is not availabe");
    }
    if(new_users[i] != current_users[j]){
      console.log(new_users[i],"username is  availabe");
    }
  }
}

// // Question number=33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

var Numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i=0; i<Numbers.length; i++){
    if (Numbers[i] = 1){
        console.log(`"1st"`);
    }
    if (Numbers[i] = 2){
        console.log(`"2nd"`);
    }
    if (Numbers[i] = 3){
        console.log(`"3rd"`);
    }
    if (Numbers[i] = 4){
        console.log(`"4th"`);
    }
    if (Numbers[i] = 5){
        console.log(`"5th"`);
    }
    if (Numbers[i] = 6){
        console.log(`"6th"`);
    }
    if (Numbers[i] = 7){
        console.log(`"7th"`);
    }
    if (Numbers[i] = 8){
        console.log(`"8th"`);
    }
    if (Numbers[i] = 9){
        console.log(`"9th"`);
    }
    }

// Question number=34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

var Pizza:string[]=["mali Boti","pepperoni","bhari kabab",];
for (var index = 0; index < Pizza.length; index++) {
    console.log(Pizza[index]);}
for (var index = 0; index < Pizza.length; index++) {
    console.log(`I Like ${Pizza[index]} pizza`);}
console.log("I really love pizza!");

// Question number=35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals:string[]=["dog","cow"];
for (const animal of animals) 
    if (animal==="dog") {
        console.log(`A ${animal} would make a great pet.`);
    }
    else if (animal==="goat") {
        console.log(`A ${animal} is alos used to get Milk.`);
    }

// Question number=36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:any,message:string) {
    console.log(`you order =${size} T-shirt and message  you want to print is "${message}"`);
}
make_shirt("large","Prision no 1000")

// Question number=37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size:any) {
    if (size===`large`) {
       console.log("I love ali haider.");
    }
     else if    (size===`medium`) {
        console.log("I love pakistan.");
    }
    else if    (size===`small`) {
        console.log("I love sajjar.");} 
    }
    makeShirt("large")
    makeShirt("medium")
    makeShirt("small")
    
// Question number=38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string, country:string = `default Country`) {
    console.log(`${city} is in ${country}`);
}
describe_city("lahore", "pakistan");
describe_city("istanbol", "turkey");
describe_city("amritsar");

// Question number=39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string, country:string) {
    console.log(`"${city},is in ${country}"`);
};
city_country("Faislabad","Pakistan");
city_country("Istanbul","Turkey");
city_country("Madina","Sudia Arabia");

// Question number=40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name: string, album_title: string){
  let newAlbum = {
      name_Of_Artist: artist_name,
      title_Of_Album: album_title
  }
  return newAlbum
}
let album1 = make_album("Naeem", "Over the world");
let album2 = make_album("Goraya", "The Blue World");
let album3 = make_album("Naeem Goraya", "I will see you in heaven");

console.log(album1);
console.log(album2);
console.log(album3);

// Question number=41
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
var magician:string[]=["Harry ","ALison","Butt","john","Jutt","Mian"]
function show_magicians(megician:string[]) {
  megician.forEach(element =>{console.log(element);});
};
show_magicians(magician);

// Question number=42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magician:string[]=["Harry ","ALison","Butt","john","Jutt","Mian"]
  function show_magician(megician:string[]) {
    var greatMagician:string[]=magician.map(magician=>`the great ${magician}`)
    return greatMagician
  }
  console.log( show_magician(magician));

// Question number=43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var make_great=(magician);
var newArray:string[]=["wahab","butt","rana","tayyab"];
show_magician(newArray);

// Question number=44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(items:string[]) {
  console.log("You ordered a sandwich with the following ingredients:");
  for (var item of items) {
  console.log(`- ${item}`);
} }
var orderSandwich=["Ham", "Cheese", "Lettuce", "Tomato"];
sandwich(orderSandwich);

// Question number=45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function infoCar(manufacturer:string,model:any,...properties:any[string][string]) {
  var car:any ={manufacturer,model};
  for (const [key , value] of properties) {
      car [key]=value
  }
  return car
}

var mycar=infoCar("toyta","civic",["color","White"],["extra Feacture","Sun roof"])
console.log(mycar);