import React,{ useState } from 'react'


export const PokemonGridItem = ({id,nombre,url,peso,tipo,alto}) => {





  //  console.log({id,nombre})
    return (



        <div>
         
       {/* {img.title}*/}
  
        
        <div  className={
            
            tipo==='grass'&& 'card  animate__animated animate__fadeIn grass' ||
            tipo==='bug' && 'card  animate__animated animate__fadeIn bug' ||
tipo==='dark' && 'card  animate__animated animate__fadeIn dark' || 
tipo==='dragon' && 'card  animate__animated animate__fadeIn dragon' || 
tipo==='electric' && 'card  animate__animated animate__fadeIn electric' ||
tipo==='fairy' && 'card  animate__animated animate__fadeIn fairy' ||
tipo==='fighting' && 'card  animate__animated animate__fadeIn fighting' ||
tipo==='fire' && 'card  animate__animated animate__fadeIn fire' ||
tipo==='ghost' && 'card  animate__animated animate__fadeIn ghost' ||
tipo==='ground' && 'card  animate__animated animate__fadeIn ground' ||
tipo==='ice' && 'card  animate__animated animate__fadeIn ice' ||
tipo==='normal' && 'card  animate__animated animate__fadeIn normal' ||
tipo==='poison' && 'card  animate__animated animate__fadeIn poison' ||
tipo==='psychic' && 'card  animate__animated animate__fadeIn psychic' ||
tipo==='rock' && 'card  animate__animated animate__fadeIn rock' ||
tipo==='steel' && 'card  animate__animated animate__fadeIn steel' ||
tipo==='water' && 'card  animate__animated animate__fadeIn water'

           

             			

           		
		


            
        } >
     
        <img src={ url } alt={ nombre } />
       
        <p className="transformadora">{ nombre } </p>
       
        </div>
    
        <div  className="card sizeCard animate__animated animate__fadeIn flotar  ">
        <p>id: {id} </p>
            <p>Peso: {peso} kg</p>
            <p>Tipo: {tipo}</p>
            <p>Alto: {alto} cm</p>
        </div>
      
            
   
        </div>
    )
}
