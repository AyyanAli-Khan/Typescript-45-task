"use strict";
let usernames = ["kinza", "nabeel", "shayyan", "admin", "ahsan"];
for (let username of usernames) {
    if (username.toLowerCase() == "admin") {
        console.log("Hello admin , all pending tasks are done.");
    }
    else {
        console.log(`Hello ${username} , thank you for logging in again in our website.`);
    }
}
