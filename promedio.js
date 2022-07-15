    /* const lista = [
        100,
        200,
        300,
        500
    ];
 */



calcularMediaAritmetica = (lista) =>{
/*     
    let summaLista = 0;

    for (let i= 0; i < lista.length; i++){
        summaLista += lista[i]; 
    }*/
    
 

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}