const precioOriginal = 100;
const descuento = 15;




function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
};

function onClickButtonPriceDiscount(){
    const price = parseInt(document.getElementById("price").value);
    
    const discount = parseInt(document.getElementById("discount").value);
    
    const priceDiscount = calcularPrecioConDescuento(price, discount);
    
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "Tu precio con descuento es: $" + priceDiscount;
}
/* 
console.log({
    precioOriginal,
    descuento,
    porcentajeConDescuento,
    precioConDescuento
}); */