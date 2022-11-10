const crearNuevaLinea = () => {

    const contenido = `</tr >
    </thead >
    <tbody data-table>
        <tr>
            <td class="td" data-td>Gabriela</td>
            <td>gabriela@alura.com</td>
            <td>
                <ul class="table__button-control">
                    <li>
                        <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
                    </li>
                    <li>
                        <button class="simple-button simple-button--delete" type="button">
                            Eliminar
                        </button>
                    </li>
                </ul>
            </td>
        </tr>`;
    };


const http = new XMLHttpRequest();

        //abrir http (método, url);

        //Crud  -método HTTP
        //Create  - Post
        //Read  - Get
        //Update  - Put/Patch
        //Delete  - Delete

        http.open("GET", "http://localhost:3000/perfil");

        http.send();

http.onload = () => {

    const data = http.response
        console.log(data);

};

        console.log(http);