const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let whileLoopCounter = 0;
while (whileLoopCounter < ingredients.length) {
    console.log( ingredients[whileLoopCounter]);
    whileLoopCounter++;
}
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++){
    console.log( ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length - 1; i >= 0; i--){
    console.log( ingredients[i]);
}