let precio = 700000;
let cantidad = 0;
let total = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;

function aumentarCantidad() {
  cantidad = cantidad + 1;
  total = cantidad * precio;
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = total;
}

function disminuirCantidad() {
  if (cantidad > 0) {
    cantidad = cantidad - 1;
    total = cantidad * precio;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = total;
  }
}
