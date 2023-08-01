import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        alert("ocurrió un error");
    }

    const imagen = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");


    clientServices.detalleCliente(id).then(perfil => {
        imagen.value = perfil.imagen;
        nombre.value = perfil.nombre;
        precio.value = perfil.precio;

    });

}; 


obtenerInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;

    clientServices.actualizarCliente(imagen,nombre,precio,id).then(() => {
        window.location.href="../screens/all-products.html";
    })
});

