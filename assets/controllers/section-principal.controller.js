import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (imagen,nombre,precio) => {
    
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
const limit = 5; // Define aquí el límite de elementos a mostrar (en este caso, 5)

clientServices.listaProductos().then((data) => {
  data.slice(0, limit).forEach(({ imagen, nombre, precio, id }) => { // Utiliza el método slice para obtener solo los primeros 5 elementos
    const nuevaLinea = crearNuevaLinea(imagen, nombre, precio, id);

    // Convertir nuevaLinea en un elemento DOM antes de agregarlo a table
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = nuevaLinea;
    const nuevaLineaElement = tempDiv.firstElementChild;

    // Agregar la nueva línea a table
    table.appendChild(nuevaLineaElement);
  });
}).catch((error) => alert("ocurrió un error"));



const crearNuevaLinea2 = (imagen,nombre,precio) => {
    
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

const table2 = document.querySelector("[data-table2]");
const limit2 = 5; // Define aquí el límite de elementos a mostrar (en este caso, 5)
const startIndex = 10; // Índice desde el cual se mostrarán los siguientes 5 elementos

clientServices.listaProductos().then((data) => {
  data.slice(startIndex, startIndex + limit2).forEach(({ imagen, nombre, precio, id }) => {
    const nuevaLinea = crearNuevaLinea2(imagen, nombre, precio, id);

    // Convertir nuevaLinea en un elemento DOM antes de agregarlo a table2
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = nuevaLinea;
    const nuevaLineaElement = tempDiv.firstElementChild;

    // Agregar la nueva línea a table2
    table2.appendChild(nuevaLineaElement);
  });
}).catch((error) => alert("ocurrió un error"));



const crearNuevaLinea3 = (imagen,nombre,precio) => {
    
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

const table3 = document.querySelector("[data-table3]");
const limit3 = 5; // Define aquí el límite de elementos a mostrar (en este caso, 5)
const startIndex2 = 15; // Índice desde el cual se mostrarán los siguientes 5 elementos

clientServices.listaProductos().then((data) => {
  data.slice(startIndex2, startIndex2 + limit3).forEach(({ imagen, nombre, precio, id }) => {
    const nuevaLinea = crearNuevaLinea3(imagen, nombre, precio, id);

    // Convertir nuevaLinea en un elemento DOM antes de agregarlo a table3
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = nuevaLinea;
    const nuevaLineaElement = tempDiv.firstElementChild;

    // Agregar la nueva línea a table3
    table3.appendChild(nuevaLineaElement);
  });
}).catch((error) => alert("ocurrió un error"));
