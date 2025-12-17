const fullName = "Kasiemobi Eke"
let age = 25
let favouriteProgrammingLanguage = "JavaScript"
const isGraduate = true
const graduationYear = 2023

const introduction = `My name is ${fullName}. I am ${age} years old. My favourite programming language is ${favouriteProgrammingLanguage}. ${isGraduate ? `I graduated in ${graduationYear}.` : `I am not a graduate yet.`}`

const introduction2 = "My name is " + fullName + ". I am " + age + " years old. My favourite programming language is " + favouriteProgrammingLanguage + ". " + (isGraduate ? "I graduated in " + graduationYear + "." : "I am not a graduate.")

console.log(introduction)
console.log(introduction2)

