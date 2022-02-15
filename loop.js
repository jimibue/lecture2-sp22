// different kinds of loops IN JS

// for loop
// while loop
// do...while loop
// for...in loop
// for...of loop (ES6)
// for...each
// The for loop

// for loop

/* for (statement 1; statement 2; statement 3) {
  // Code to be executed
} */

/* for(variable definition/index/initialization; condition checking; increment/decrement expression) {
  // Code to be executed
} */

console.log("count to 10");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("count from 10");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("infinite loop");
// for(let i = 10; i >= 0 ; i++){
//     console.log(i)
// }

console.log("even or odd");
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
      } else {
        console.log(`${i} is odd`);
      }
}
console.log("array example");
//////////  0,  1,  2,  3
let arr = ['a','b','c','d','e', 'g']

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// don't use a for loop to loop over array
// use arr methods to loop over array
arr.forEach((char)=>{
    console.log(char)
})

// while loop

/*while(condition) {
  // Code to be executed
}*/
let i = 0
while(i<=10){
    if(i === 5){
        i++;
        continue;
    }
    if( i===8){
        break;
    }
    console.log('i:', i)
    i++
}

