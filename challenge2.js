//10 > 2 * 10 use console.assert()

console.assert(10 > 2 * 10)

//Write a warning message using console.warn()

console.warn("This shit is ghetto, bro.")

//Write an error message using console.error()

console.error("ERROR")

//Check the speed difference among the following loops: while, for, for of, forEach

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.time('Time for Loop') 
for (let i = 0; i < countries.length; i++){
    console.log(countries[i][0], countries[i][0])
}
console.timeEnd('Time for Loop')
  
console.time('Time for of loop')
for (const [name, city] of countries){
    console.log(name, city)
}
 console.timeEnd('For of loop')

 console.time('for forEach Loop') 
 countries.forEach(([name, city]) => {
     console.log(name,city)
 })
console.timeEnd('for forEach loop')
