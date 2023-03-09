//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let name1 = prompt("Escribe tu nombre")
let age1 = prompt("Escribe tu edad")
let user1 = {age: age1, name: name1}
// console.log(user1)

let name2 = prompt("Escribe tu nombre")
let age2 = prompt("Escribe tu edad")
let user2 = {age: age2, name: name2}

let name3 = prompt("Escribe tu nombre")
let age3 = prompt("Escribe tu edad")
let user3 = {age: age3, name: name3}

let minAge = Math.min(age1, age2, age3)
// console.log(minAge)

let users = [user1, user2, user3]

for  (let i = 0; i < users.length; i++) {
    if (parseInt(users[i].age) === minAge) {
        document.write (users[i].name)
    }
}

