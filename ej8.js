// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

function piramyd () {
let userNumber = prompt("Escoge un número")
if (userNumber <= 50) {
    for (let i = 1; i <= userNumber; i++) {
        let counter = 0;
        while (counter < i) {
            for (let j = 1; j <= i; j++ ) {
                document.write(`${j}`) 
                counter ++
            }
        }
        document.write(`<br/>`)
    }
} else {
    alert("Escoge un número menor o igual a 50")
    piramyd()
    }
}

piramyd()
