    /* const lista = [
        100,
        200,
        300,
        500
    ];
 */



calcularMediaAritmetica = (lista) =>{
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}