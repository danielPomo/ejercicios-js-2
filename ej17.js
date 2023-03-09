//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let text = prompt("Escribe algo")
let arr= []
for (let i = 0; i <= text.length; i++) {
    if (text[i] ==="a" || text[i] ==="á" || text[i] ==="e" || text[i] ==="é" || text[i] ==="i" || text[i] ==="í" || text[i] ==="o" || text[i] ==="ó" || text[i] ==="u"|| text[i] ==="ú") {
        arr.push(i)
    }
}
document.write((Math.min(...arr)))