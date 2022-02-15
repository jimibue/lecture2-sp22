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


