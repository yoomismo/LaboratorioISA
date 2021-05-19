const suma = (a,b) => {
    return a+b;
}

const prueba_suma = () => {
    const a = 5;
    const b = 15;
    const resultado = suma(a,b)
    const esperado = 20;
    console.assert(resultado === esperado, "ha fallado")
}

//resta juan

prueba_suma();