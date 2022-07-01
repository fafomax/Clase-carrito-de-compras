import { limpiarHTML } from "./limpiarHTML.js";
import { contenedorCarrito } from "./variables.js";

export function carritoHTML(elemento) {
  limpiarHTML();
  elemento.map((el) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img style="width: 100px; height: 80px;" src="${el.imagen}"></td>
        <td>${el.titulo} </td>
        <td>${el.precio} </td>
        <td>${el.cantidad} </td>
        <td>
        <a class='borrar-curso'  href='#' data-id ='${el.id}'>Eliminar</a>
        </td>
        `;
    contenedorCarrito.appendChild(row);
  });
}

// Para la proxima clase:
//  -Hacer el SUMAR CANTIDAD en el carrito
//  -Escribir la X de eliminar en el DOM
