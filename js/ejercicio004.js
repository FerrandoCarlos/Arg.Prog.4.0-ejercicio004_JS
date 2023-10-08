/**
 * Crear un array que tenga los siguientes colores: rojo, azul, verde, amarillo, naranja, marron, violeta, rosa. Recorrerlos con un FOR OF y mostrar los colores que comienzan con r y los que comienzan con v. 
 */

const colores = ["rojo","azul","verde","amarillo","naranja","marron","violeta","rosa"];

for (const color of colores) {
    if(color[0] === "r" || color[0]==="v"){
        console.log(color);
    }
}