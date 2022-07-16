calcularMediaAritmetica = (lista) =>{
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/* const numeros = [
    250,
    200,
    100000000,
    300
    
].sort((a, b) => {return a - b});


const mitadarrayMediana = parseInt(arrayMediana.length / 2);

function esPar(numerito){
    if (numerito % 2 ===0){
        return true
    } else{
        return false
    }
}





let mediana;
if (esPar(arrayMediana.length)){
    const elemento1 = arrayMediana[mitadarrayMediana  - 1];
    const elemento2 = arrayMediana[mitadarrayMediana];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);
    mediana = promedioElemento1y2;

    } else{
        mediana = arrayMediana[mitadarrayMediana];
    } */

const getMedian = () =>{
    const inputNum = document.getElementById("inputNum");
    const inputValue = inputNum.value
    let arrayMediana = Array.from(inputValue.split(","), Number);
    arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor); 

    //Consigo la mitad de mi lista
    const mitadarrayMediana = parseInt(arrayMediana.length / 2);

    //Detecto que mi lista sea par
    function esPar(numerito){
        if (numerito % 2 ===0){
            return true
        } else{
            return false
        }
    }

    let mediana;
    // Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else

    if (esPar(arrayMediana.length)){
        const elemento1 = arrayMediana[mitadarrayMediana  - 1];
        const elemento2 = arrayMediana[mitadarrayMediana];

    // Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
         const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
        mediana = promedioElemento1y2;

        } else{
        mediana = arrayMediana[mitadarrayMediana];
    }
    //   Enviamos los resultados obtenidos a la pagina html para su visualizacion
    const show = document.getElementById("show");
    show.innerText = "La mediana de tus números es: " + mediana;
}