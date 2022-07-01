import * as v from "./variables.js";
import { carritoHTML } from "./carrito.js";
let articulosCarrito = [];

document.addEventListener("DOMContentLoaded", () => {
  v.listaCursos.addEventListener("click", agregarCurso);

  v.carrito.addEventListener("click", eliminarElemento);
});

export function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

function leerDatosCurso(curso) {
  console.log(curso);
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Sumar cantidades
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id); //"Some()" devuelve un booleano en caso de existir un elemento o no dentro del array

  if (existe) {
    articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return;
      }
    });
  } else {
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  carritoHTML(articulosCarrito);
}

function eliminarElemento(e) {
  const eliminar = e.target.matches(".borrar-curso");

  if (eliminar) {
    const cursoID = e.target.getAttribute("data-id");
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoID);
    carritoHTML(articulosCarrito);
  }
}
