const axios = require("axios");

const getCharByid = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data) // con axios no es necesario pasar a json
    .then((data) => {
        console.log(data)
      const character = {
        image: data.image,
        name: data.name,
        species: data.species,
        gender: data.gender,
        id: data.id
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((error) =>
      res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(error.message)
        //.end(`Personaje con ${id} no encontrado`)
        //.end({"menssage": "Personaje no encontrado"}) // tb puedo enviar un msj en formato json
    );
};

module.exports = getCharByid;
