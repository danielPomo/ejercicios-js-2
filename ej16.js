//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let string = prompt("Escribe algo")

let newString = string.split("").reverse().join("")

document.write(newString)

