const magicians: string[] = ["Ali", "Sara", "Zaviyan", "Eric"];

function show_magicians(magician: string[]) {
  magician.forEach((magicianName) => {
      console.log(magicianName);
  });
}

function make_great(greatMagician: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    greatMagician[i] = `${greatMagician[i]} the Great`;
  }

  return greatMagician;
}

let great_magicians = make_great([...magicians]);

console.log("Original Magicians :");
show_magicians(magicians)
console.log("\n");
console.log("Great Magicians :");
show_magicians(great_magicians)
