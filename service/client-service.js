//abrir http (método, url);
//Crud  -método HTTP
//Create  - Post
//Read  - Get
//Update  - Put/Patch
//Delete  - Delete
//fecth API
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4()})
    });
};

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
};

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json()
    );
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nobre, email}),
    })
    .then( respues => console.log(respues))
    .cath(err => console.log(err))
};

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};


