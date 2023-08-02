import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (imagen,nombre,precio,id) => {
    
    const contenido = `
    <article class="section__products-article">
    <div class="section__image-article">
        <img src="${imagen}">
    </div>
    <footer class="section__products-footer">
        <h4 class="section__title-article">${nombre}</h4>
        <p class="section__price-article">
            <strong>
                Q
                ${precio}
            </strong>
        </p>
        <p class="section__see-article">Ver producto</p>
    </footer>
    <div class="section__image-btn">
        <a href="../screens/edith-products.html?id=${id}"><button class="Editar">Editar</button></a>
        <button class="Eliminar" id="${nombre}">Eliminar</button>
    </div>
    </article>`;
    
        // Crear un elemento temporal para convertir el contenido en un elemento del DOM
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = contenido;
    
    // Usar querySelector en el elemento temporal para seleccionar los botones
    const botonEliminar = tempDiv.querySelector(".Eliminar");
    botonEliminar.addEventListener("click", () => {
        const name = botonEliminar.id;
        console.log("El click", name);
    });
    
    return contenido; 
    
}


const table = document.querySelector("[data-table]");

clientServices.listaProductos().then((data) => {
    data.forEach(({ imagen, nombre, precio, id }) => {
        const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);

        // Convertir nuevaLinea en un elemento DOM antes de agregarlo a table
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = nuevaLinea;
        const nuevaLineaElement = tempDiv.firstElementChild;

        // Aquí agregamos el EventListener al botón "Eliminar" después de insertarlo en el DOM
        const botonEliminar = nuevaLineaElement.querySelector(".Eliminar");
        botonEliminar.addEventListener("click", () => {
            clientServices.eliminarCliente(id).then(respuesta =>{
                console.log(respuesta);
                window.location.href="../screens/all-products.html"
            }).catch(err => alert("Ocurrió un error XD"));
        });

        // Agregar la nueva línea a table
        table.appendChild(nuevaLineaElement);
    });
}).catch((error) => alert("ocurrió un error"));

