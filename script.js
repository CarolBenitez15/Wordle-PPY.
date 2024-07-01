let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
console.log("adivinar " + palabra)


const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);
function intentar() {
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            console.log(INTENTO[i], "VERDE")
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';   
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
            console.log(INTENTO[i], "AMARILLO")
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
            console.log(INTENTO[i], "GRIS")
        }
        ROW.appendChild(SPAN)  
    }
    GRID.appendChild(ROW)
    intentos--

    console.log("quedanIntentos " + intentos)
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!😍</h1>")
        console.log("GANASTE!")
        return
    }
    if (intentos == 0) {
        terminar("<h1>PERDISTE!😖</h1>")
        console.log("PERDISTE!")
    }
}


function leerIntento() {
    let intento = document.getElementById("guess-input");
    console.log(intento)

    intento = intento.value;
    console.log("Usuario " + intento)
    intento = intento.toUpperCase();
    console.log(intento)
    return intento;
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}














