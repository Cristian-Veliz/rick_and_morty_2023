const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) =>{ // async --> una f asincrona
  try {
    const {id} = req.params;
    const {data} = await axios(URL + id) // await simula una pausa y me permite no usar .then para anidar promesas
    
    
    const character = {
        image: data.image, 
        name: data.name, 
        species: data.species,
        gender: data.gender, 
        id: data.id,
      }
      return character 
      ? res.status(200).json(character)
      : res.status(404).send('Not found')//no encontrado
      
    
  } catch (error) {
    res.status(500).send({message: error.message})
    
  }

}

module.exports = {
  getCharById
}