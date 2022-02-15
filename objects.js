// object are key value pairstore
// think a dictonary
// think of describing a person

let dict = {apple:'a thing that grows on a tree', zebra:'a thing with 4 leg'}

let bob = {name:'Bob', age:21}
let jill = {name:'Jill', age:31}

bob.eyeColor = 'blue'

// access a key
console.log(bob.name)
console.log(bob.age)
console.log(bob.eyeColor)
console.log(Object.keys(bob))

let people = [bob, jill]
console.log(people[1].name)

people.forEach((person)=>{
  if(person.age >= 21){
      console.log(`${person.name} can gamble`)
  } else{
    console.log(`${person.name} can not gamble`)
  }
})

// the most important thing is that is works
// the most important thing is that is works
// readability - practice
// efficient - google