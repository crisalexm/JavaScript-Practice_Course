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
    return (lado1 + lado2 + base);
} ;
console.log("El perímetro del triangulo es: " + perimetroTriangulo() + "cm");

function areaTriangulo(base, altura){
    return Number((base * altura) / 2);
    console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
}  
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del Circulo

console.group("Circulos")
// Diametro
function diametroCirculo(radio) {
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

// JS TO HTML CUADRADO
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
};
// JS TO HTML TRIANGULO
function calcularPerimetroTriangulo(){
    //Lado 1
    const input1 = document.getElementById("lado1");
    const lado1 = Number(input1.value);
    //Lado 2
    const input2 = document.getElementById("lado2");
    const lado2 = Number(input2.value);
    // Base
    const input3 = document.getElementById("base");
    const base = Number(input3.value);
    const perimetro = perimetroTriangulo(lado1,lado2, base);
    alert(perimetro);
};
function calcularAreaTriangulo(){
    // Lado 1
    const input1 = document.getElementById("lado1");
    const lado1 = Number(input1.value);
    // Lado 2
    const input2 = document.getElementById("lado2");
    const lado2 = Number(input2.value);
    // Base
    const input3 = document.getElementById("base");
    const base = Number(input3.value);
    // Altura
    const input4 = document.getElementById("altura");
    const altura = Number(input4.value);
    const area = areaTriangulo(base, altura);
    alert(area);
};
function calcularDiametroCirculo(){
    const radio = parseInt(document.getElementById("radio").value);
    const diametro = diametroCirculo(radio);
    alert(diametro);
}