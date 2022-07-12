// Código del cuadrado
console.group("Cuadrados")

function perimetroCuadrado  (lado){
    return lado * 4
};

areaCuadrado =(lado) =>
 lado * lado;
console.groupEnd()

// Código del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} ;
console.log("El perímetro del triangulo es: " + perimetroTriangulo() + "cm");

function areaTriangulo(base, altura){
    return (base* altura) / 2;
}  
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del Circulo

console.group("Circulos")
// Diametro
function diametroCirculo(radio  ) {
    return radio * 2
};

// PI
var PI = Math.PI;
console.log("EL valor de PI: "+ PI);
// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

// Área
function areaCirculo (radio){
    return (radio * radio) * PI};

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}