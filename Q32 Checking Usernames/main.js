"use strict";
let current_users = ["ayyan", "zohan", "ali", "kinza", "usman"];
let new_users = ["ALI", "zaviyan", "haris", "Zohan", "rafay"];
new_users.forEach((name) => {
    if (current_users.includes(name.toLowerCase())) {
        console.log(`Enter a new username , this username is already in used.`);
    }
    else {
        console.log(`username '${name}' is avaiable.`);
    }
});
