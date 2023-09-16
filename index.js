"use strict";
let guyest = ["aysh", "maria", "alia"];
let found = guyest[0];
console.log(`I have found ${found} hat your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. `);
// Define an array to store the names of the guests
let guests = ["Guest 1", "Guest 2", "Guest 3", "Guest 4", "Guest 5"];
let UserName = "bhaloo";
let half = Math.floor(guests.length / 2);
guests.splice(half, 0, "bhaloo");
console.log("check", guests);
// Continue removing guests until only two names remain
while (guests.length > 2) {
    // Remove the last guest from the list using pop()
    const removedGuest = guests.pop();
    // Print a message to the removed guest
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print the final list of guests
console.log("Final Guest List:");
console.log(guests);
