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
                R$
                ${precio}
            </strong>
        </p>
        <p class="section__see-article">Ver producto</p>
    </footer>
    </article>`;
    
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

        // Agregar la nueva línea a table
        table.appendChild(nuevaLineaElement);
    });
}).catch((error) => alert("ocurrió un error"));

