import React from 'react'
import { PokemonGridItem } from './PokemonGridItem'

export const TypePokemonItem = ({id,nombre,url,peso,tipo,alto}) => {

console.log(nombre, peso,alto, id) 
    return (
        <div>
         
        {/* {img.title}*/}
        <div className="divPrincipal">
         
         <div  className={
             
             tipo==='grass'&& 'card1  animate__animated animate__fadeIn grass' ||
             tipo==='bug' && 'card1  animate__animated animate__fadeIn bug' ||
 tipo==='dark' && 'card1 animate__animated animate__fadeIn dark' || 
 tipo==='dragon' && 'card1  animate__animated animate__fadeIn dragon' || 
 tipo==='electric' && 'card1  animate__animated animate__fadeIn electric' ||
 tipo==='fairy' && 'card1  animate__animated animate__fadeIn fairy' ||
 tipo==='fighting' && 'card1  animate__animated animate__fadeIn fighting' ||
 tipo==='fire' && 'card1 animate__animated animate__fadeIn fire' ||
 tipo==='ghost' && 'card1  animate__animated animate__fadeIn ghost' ||
 tipo==='ground' && 'card1  animate__animated animate__fadeIn ground' ||
 tipo==='ice' && 'card1 animate__animated animate__fadeIn ice' ||
 tipo==='normal' && 'card1  animate__animated animate__fadeIn normal' ||
 tipo==='poison' && 'card1  animate__animated animate__fadeIn poison' ||
 tipo==='psychic' && 'card1  animate__animated animate__fadeIn psychic' ||
 tipo==='rock' && 'card1  animate__animated animate__fadeIn rock' ||
 tipo==='steel' && 'card1  animate__animated animate__fadeIn steel' ||
 tipo==='water' && 'card1  animate__animated animate__fadeIn water'
 
            
 
                          
 
                    
         
 
 
             
         } >
      
         <img src={ url } alt={ nombre } />
        
         <p className="transformadora">{ nombre } </p>
        
         </div>
         </div>
     
     {/*     <div  className="card  animate__animated animate__fadeIn flotar  ">
         <p>id: {id} </p>
             <p>Peso: {peso} kg</p>
             <p>Tipo: {tipo}</p>
             <p>Alto: {alto} cm</p>
         </div> */}
       
             
    
         </div>
    )
}
