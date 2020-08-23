import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import { PokemonGridItem } from './PokemonGridItem';
import { probando } from '../helpers/probando';
/* import PropTypes from 'prop-types'; */
import { TypePokemonItem } from './TypePokemonItem';


export const TypePokemon = ({example}) => {

const [type,setType]=useState(example)
//['bug','dark','dragon','electric','fairy','fighting','fire','ghost','grass','ground','ice','normal','poison','psychic','rock','steel','water']

/* const getFetchTypes=(e)=>{
cojudo=e.target.value
    console.log(cojudo);
}

 */

 
/*  useEffect(()=>{
    
    probando()
     .then(setType) 
     console.log(type);
 },[])  
 */
 const getFetchTypes=({target})=>{

   //console.log(type);


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
   
 // console.log(pipa);
    

  const imagenPokemon=document.querySelector('.imagenPokemon');

 
        const mundo=  pipa.map(( img )=>
        (<TypePokemonItem
        key={img.id}
       {...img} />))
 ReactDOM.render(mundo,imagenPokemon);  
    

   // console.log(value);
      //    console.log(tipo1);
     
     // const imagenPoke=document.querySelector('.imagenPokemon');
   
     
    
 }





    
    return (
        <div>
<div className="divPrincipal">
            <input 
            className="tipo bug"
                type="submit"
                value="bug"
                onClick={getFetchTypes}
               
            />
            <input 
            className="tipo dark"
                type="submit"
                value="dark"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo dragon"
                type="submit"
                value="dragon"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo electric"
                type="submit"
                value="electric"
                onClick={getFetchTypes}
            />
          
            <input 
            className="tipo fairy"
                type="submit"
                value="fairy"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo fighting"
                type="submit"
                value="fighting"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo fire"
                type="submit"
                value="fire"
                onClick={getFetchTypes}
            />
             <input 
            className="tipo ghost"
                type="submit"
                value="ghost"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo grass"
                type="submit"
                value="grass"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo ground"
                type="submit"
                value="ground"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo ice"
                type="submit"
                value="ice"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo normal"
                type="submit"
                value="normal"
                onClick={getFetchTypes}
            />
                <input 
            className="tipo poison"
                type="submit"
                value="poison"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo psychic"
                type="submit"
                value="psychic"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo rock"
                type="submit"
                value="rock"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo steel"
                type="submit"
                value="steel"
                onClick={getFetchTypes}
            />
            <input 
            className="tipo water"
                type="submit"
                value="water"
                onClick={getFetchTypes}
                
            />
            
            </div>
            <div className="imagenPokemon card-grid">
          
         
           </div>
       
        </div>
        
    )
}

/* TypePokemon.propTypes={
    probando: PropTypes.func.isRequired
} */