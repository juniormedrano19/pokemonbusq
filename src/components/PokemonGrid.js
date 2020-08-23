import React, { useEffect, useState } from 'react'
import { PokemonGridItem } from './PokemonGridItem';
import {getFetchPokemon} from '../helpers/getFetchPokemon'

export const PokemonGrid = ({pokemon}) => {

    const [images, setImages]=useState([]);
    const [prueba, setPrueba]=useState([]);


  useEffect(()=>{

    getFetchPokemon(pokemon)
    .then(setImages)
  
  
 
 
  
},[pokemon])

   


  /*  const getTipo=async(numero)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${encodeURI(numero)}`

    let resp= await fetch(url);
   let data= await resp.json();
   const {'0':cero}=data.types;
  
   const {name: nombreTipo}=cero.type

   console.log(nombreTipo);
   }

  for(let i=1;i<=807;i++){
      getTipo(i)
  }

 */

   




    

    return (
        <>
       {/*  <h3>{images.nombre}</h3> */}
        <div className="card-grid">
           {
                  <PokemonGridItem 
                    key={images.id}
                    {...images}
                  />
                    
           }
         
        </div>
            
        </>
    )
}
