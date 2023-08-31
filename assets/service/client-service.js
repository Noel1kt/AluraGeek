//Fech API 
const listaProductos = () =>  fetch("https://accurate-bald-toaster.glitch.me/productos").then(respuesta => respuesta.json());
window.onload = function() {
    const loadingContainer = document.getElementById("loading-container");
    const contentContainer = document.getElementById("content-container");
  
    // Simular tiempo de carga (en milisegundos)
    const tiempoCarga = 8000;
  
    // Aquí se simula la carga de datos
    setTimeout(function() {
      // Mostrar contenido y ocultar animación de carga
      loadingContainer.style.display = "none";
      contentContainer.style.display = "block";
      const listaProductos = () =>  fetch("https://accurate-bald-toaster.glitch.me/productos").then(respuesta => respuesta.json());
    }, tiempoCarga);
  };

const crearProducto = (imagen,nombre,precio) => {
    return fetch("https://accurate-bald-toaster.glitch.me/productos", {
        method:"POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,nombre,precio})
    });
}

const eliminarCliente = (id) => {
    return fetch(`https://accurate-bald-toaster.glitch.me/productos/${id}`, {
        method: "DELETE",
    });
}

const detalleCliente = (id) => {
    return fetch(`https://accurate-bald-toaster.glitch.me/productos/${id}`).then((respuesta) => respuesta.json()
    );
}

const actualizarCliente = (imagen,nombre,precio,id) =>{
    return fetch(`https://accurate-bald-toaster.glitch.me/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,nombre,precio})
    })
    .then(respuesta => respuesta)
    .catch((errr)=> console.log(errr));

}

export const clientServices = {
    listaProductos,
    crearProducto,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}




