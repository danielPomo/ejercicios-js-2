//15- Realiza un script que cuente el número de vocales que tiene un texto.

let text1 = prompt("Escribe algo")
let text = text1.toLowerCase()

let counter = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] ==="a" || text[i] ==="á" || text[i] ==="e" || text[i] ==="é" || text[i] ==="i" || text[i] ==="í" || text[i] ==="o" || text[i] ==="ó" || text[i] ==="u"|| text[i] ==="ú") {
        counter ++
    }
}
document.write(counter)