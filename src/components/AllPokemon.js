import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { PokemonGridItem } from './PokemonGridItem';
import { probando } from '../helpers/probando';
/* import PropTypes from 'prop-types'; */
import { TypePokemonItem } from './TypePokemonItem';
import { mostrarTodos } from '../helpers/mostrarTodos'
import { AllPokemonGrid } from './AllPokemonGrid';


export const AllPokemon = ({mostrarTodos}) => {

const [type,setType]=useState(mostrarTodos)
//['bug','dark','dragon','electric','fairy','fighting','fire','ghost','grass','ground','ice','normal','poison','psychic','rock','steel','water']

/* const getFetchTypes=(e)=>{
cojudo=e.target.value
    console.log(cojudo);
}

 */

/* 
 useEffect(()=>{
    
    mostrarTodos()
     .then(setType)
     
 },[])  */

/*  const getFetchTypes=({target})=>{
 
    const {value}=target;
    const tipo1=type.map(({id,nombre,url,peso,tipo,alto})=>{
        if(value === tipo){
              return{
                id:id,
                nombre:nombre,
                url:url,
                tipo:tipo,
                peso:peso/10,
                alto:alto*10,
              }
         
        }
        
    })

    const pipa=tipo1.filter((dato)=>{
        return dato != undefined
      });
   
  console.log(pipa);
    

  const imagenPokemon=document.querySelector('.imagenPokemon');

 
        const mundo=  pipa.map(( img )=>
        (<TypePokemonItem
        key={img.id}
       {...img} />))
 ReactDOM.render(mundo,imagenPokemon); 
    

   // console.log(value);
      //    console.log(tipo1);
     
     // const imagenPoke=document.querySelector('.imagenPokemon');
   
     
    
 } */





    
    return (
        <div>

            <div className="imagenPokemon card1-grid">
            {
                type.map(( img )=>
        (<AllPokemonGrid
        key={img.id}
       {...img} />))
                    
           }
          
         
           </div>
       
        </div>
        
    )
}

/* TypePokemon.propTypes={
    probando: PropTypes.func.isRequired
} */