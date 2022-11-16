import { clientServices } from "../service/client-service.js";



const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id =  url.searchParams.get("id"); //console.log(url.searchParams.get("id"));
    clientServices.detalleCliente(id)
};

obtenerInformacion();


