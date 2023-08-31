import { clientServices } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");
console.log(formulario,"este");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const imagen = document.querySelector("[data-url]").value;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  console.log(imagen, "-", nombre, "--", precio);
  clientServices
  .crearProducto(imagen,nombre,precio)
  .then(() => {
    window.location.href = "../screens/all-products.html";
  }).catch((err) => console.log(err));
});
