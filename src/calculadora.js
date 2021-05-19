//Declaracion de variables
var num1 = 0;
var num2 = 0;
var opera;

//Función que coloca el número presionado
function darNumero(numero){
    if(num1==0 && num1 !== '0.'){
        num1 = numero;
    }else{
        num1 += numero;
    }
    refrescar();
}

//Función que coloca la coma al presionar dicho botón
function darComa(){
    if(num1 == 0) {
        num1 = '0.';
    } else if(num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refrescar();
}

//Función que coloca la C al presionar dicho botón
function darC(){
    num1 = 0;
    num2 = 0;
    refrescar();
}


//Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
function operar(valor){
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("valor_numero").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    opera = valor;
}

function raiz(){
    num1 = Math.sqrt(num1);
    refrescar();
    num2 = parseFloat(num1);
    num1 = 0;
}
//Función para pulsar igual
    /*
    suma = 1
    resta = 2
    multiplicacion = 3
    division = 4
    potencia = 5
*/

function esIgual(){
    num1 = parseFloat(num1);
    switch (opera){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
    }
    refrescar();
    num2 = parseFloat(num1);
    num1 = 0;
}

function refrescar(){
    document.getElementById("valor_numero").value = num1;
}