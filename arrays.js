// Arrays - list ...[]

let nums = [1,2,3,4,5,6]
let booleans = [true, false, false]

// in general you want the type of to be uniform
let random = [1,2,3,'asdfasdf',true, null]

let nestedArray = [[1,2,3],[4,5,6]]

// access items in an array by index array start at 0

console.log(nums[2])
console.log(nestedArray[1]) // [4,5,6]
console.log(nestedArray[1][2]) // 6

console.log('----')
console.log(nums.length)

// how to grab the first thing in array
console.log(nums[0])

// how to grab the last thing in array
console.log(nums[nums.length - 1])

// add item to end array
nums.push(10)
console.log(nums)

// remove last item
nums.pop()
console.log(nums)

// add item to first array
nums.unshift('x')
console.log(nums)


// remove from start
nums.shift()
console.log(nums)


// looping over an array
 
let names = ['Jon','George','Sally']

const sayHello = (person)=>{
    console.log(`Hello ${person}`)
}

// sayHello(names[0])
// sayHello(names[1])
// sayHello(names[2])

// iterate over array, forEach
names.forEach(sayHello)

// ()=>{} unnamed arrow function
// (n)=>{} unnamed arrow function
// 
names.forEach((name, i)=>{
    console.log(name)
    console.log(i)
})

// forEach
// map
// filter
// reduce
// every