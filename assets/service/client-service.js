//Fech API 
const listaProductos = () =>  fetch("http://localhost:3000/productos").then(respuesta => respuesta.json());


const crearProducto = (imagen,nombre,precio) => {
    return fetch("http://localhost:3000/productos", {
        method:"POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen,nombre,precio})
    });
}

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    });
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json()
    );
}

const actualizarCliente = (imagen,nombre,precio,id) =>{
    return fetch(`http://localhost:3000/productos/${id}`, {
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




