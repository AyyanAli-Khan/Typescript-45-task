"use strict";
function SandwichIngredients(...ingredients) {
    return `Ingredients you want in sandwich are ${ingredients.join(", ")}.`;
}
// calling function with 3 arguments
console.log(SandwichIngredients("mayonnaise", "grilled chicken"));
console.log(SandwichIngredients("cheese", "tomatoes", "lettuce"));
// calling function with 4 arguments
console.log(SandwichIngredients("cucumber", "mustard", "turkey", "cheese"));
// we can call this function with as many arguments as we want.
