import Card from '../card/Card';
import { CardsContenedor } from './styledComponents';

export default function Cards({characters}) {
   
   return (    
   <CardsContenedor>
      {
         
         characters.map(({ id, name, status, species, gender, origin, image }) => {
         return(
          <Card
            key= {id}
            id= {id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin?.name}
            onClose={() => alert('Emulamos que se cierra la card')}
          />
         )

      })
         
   }
   </CardsContenedor>
)};   

// La key es solo para uso interno de react, es un identificador