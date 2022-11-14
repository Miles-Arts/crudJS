//abrir http (método, url);
//Crud  -método HTTP
//Create  - Post
//Read  - Get
//Update  - Put/Patch
//Delete  - Delete
//fecth API
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre , email) => {
    fetch("http://localhost:3000/perfil", {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()})
    });
}


export const clientServices = {
    listaClientes,
    crearCliente,
}


