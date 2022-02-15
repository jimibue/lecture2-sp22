// small programs - very simple do oneish thing


// function define/declare we do this once
function sayHello(){
    // do stuff
    console.log('Hello')
}

// invoke or call the function do this n times
sayHello()


// arrow syntax (new with ES6)
const sayHola = ()=>{
    console.log('Hola')
}

sayHola()

// define a function with a param
// think of a param as variable that is only visible to the function
function introducePerson(person){
    console.log(`Hello ${person}, I'm James`)
}

// here pass function an argument
introducePerson('Jon')
introducePerson('Jill')

function add(num1, num2){
   return num1 + num2
}

// console.log(typeof 2) //number
// console.log(2 === 3) //false
// console.log(2 === 2) //true
// console.log(add('1','1')) //'11'
// console.log(add(1,'1')) //'11'
let sum = add(1,1)
let sum1 = add(add(2,2),add(3,3))
console.log(sum1)


// once a function returns it is quits
const evenOrOdd = (num)=>{
    if(num % 2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
}

let x = evenOrOdd(3)
console.log(x) //'odd'


