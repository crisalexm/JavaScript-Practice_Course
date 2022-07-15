// Código del cuadrado
console.group("Cuadrados")

function perimetroCuadrado  (lado){
    return lado * 4
};

areaCuadrado =(lado) =>{
 return lado * lado};
console.groupEnd()

// Código del triangulo
console.group("Triangulos")

function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
} ;
console.log("El perímetro del triangulo es: " + perimetroTriangulo() + "cm");

function areaTriangulo(base, altura){
    return Number((base * altura) / 2);
}  
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
// JS TO HTML TRIANGULO //
// --------------------------- //
// JS TO HTML CIRCULO //
function calcularDiametroCirculo(){
    const radio = parseInt(document.getElementById("radio").value);
    const diametro = diametroCirculo(radio);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const radio = parseInt(document.getElementById("radio").value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const radio = parseInt(document.getElementById("radio").value);
    const area = areaCirculo(radio);
    alert(area);
}

// TRIANGULO ISOSCELES - ALTURA
/* Math.sqr((lado1**2)- ((base**2)/4)) */
function alturaTriangulo(lado1, lado2, base){
    if(lado1!=lado2){
        console.error("LEl triangulo no es Isósceles!!!")
    }
    else if (lado1 == lado2){
        return Math.sqrt((lado1**2) - ((base**2)/4)) 
    } 
};
function calcularAlturaTriangulo(){
    const lado1 = parseInt(document.getElementById("ladoA").value);
    const lado2 = parseInt(document.getElementById("ladoB").value);
    const base = parseInt(document.getElementById("base1").value);
    const altura = alturaTriangulo(lado1, lado2, base);
    alert(altura);
}