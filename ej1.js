//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const canDrive = () => {
    let age = prompt("Please enter your age")
        if (age !== "") {
            let ageNumber = parseInt(age)
            if (ageNumber > 18) {
                alert("You are old enough to drive without an adult supervision")
            } else {
                alert("Take it easy, you´re still not grown enough to drive on your own")
            }
        } else {
            alert("Your age should be a number! Try again")
        }
}

// no se realmente como validar que algo es un numero, porque parseInt convierte cualquier string del prompt a tipo number

canDrive()

