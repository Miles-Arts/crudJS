const http = new XMLHttpRequest()

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