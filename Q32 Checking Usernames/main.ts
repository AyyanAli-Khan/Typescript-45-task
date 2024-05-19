let current_users: string[] =["ayyan","zohan","ali","kinza","usman"];

let new_users: string[] = ["ALI","zaviyan","haris","Zohan","rafay"];

new_users.forEach((name: string) => {
    if (current_users.includes(name.toLowerCase())) {
        console.log(`Enter a new username , this username is already in used.`);
    } else {
        console.log(`username '${name}' is avaiable.`)
    }
});