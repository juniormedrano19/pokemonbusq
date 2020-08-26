import React, { useState, useEffect }from 'react'
import ReactDOM from 'react-dom'
import { probando } from '../helpers/probando';
import { mostrarTodos } from '../helpers/mostrarTodos';
import PokemonExpert from '../PokemonExpert'
import { TypePokemon } from './TypePokemon';
import { AllPokemon } from './AllPokemon';
import { TypePokemonItem } from './TypePokemonItem';
import { useFetchHooks } from '../hooks/useFetchHooks';

export const MenuPokemon = ({prueba}) => {

    //componente Pokemon expert
    const [state, setstate] = useState(true);

    /* const [example, setExample]=useState([])
    console.log(example);

    useEffect(()=>{
    
        probando()
        .then(setExample)
      
    },[])  */
    const {data:images,loading}= useFetchHooks();
    console.log(images);
    

   const seleccionarPokemon=(e)=>{
       
       e.preventDefault();
     //  setstate(!state);
     const boton1 = document.getElementById('boton1');
     const boton2 = document.getElementById('boton2');
     const boton3 = document.getElementById('boton3');
     const prueba1=document.querySelector('.prueba1')
     const prueba2=document.querySelector('.prueba2')
     const prueba3=document.querySelector('.prueba3')
  
     ReactDOM.render(<PokemonExpert />,prueba1)
     if(boton1.style.display = 'block'){
       boton2.style.display = 'block';
        boton1.style.display = 'block';
        boton3.style.display = 'block'; 
        prueba1.style.display= 'block';
        prueba2.style.display= 'none';
        prueba3.style.display= 'none';
  } 
       
    }


    const mostrarTipos=()=>{
       
        const boton1 = document.getElementById('boton1');
         const boton2 = document.getElementById('boton2');
         const boton3 = document.getElementById('boton3');
         const prueba1=document.querySelector('.prueba1')
         const prueba2=document.querySelector('.prueba2')
         const prueba3=document.querySelector('.prueba3')

         ReactDOM.render( <TypePokemon example={ images } />,prueba2)
     
       
        if(boton2.style.display == 'block'){
             boton2.style.display = 'block';
            boton1.style.display = 'block'; 
           prueba1.style.display= 'none';
          boton3.style.display = 'block'; 
           prueba2.style.display= 'block';
           prueba3.style.display= 'none';
        }


    }










    const ocultarPokemon=()=>{
        const boton1 = document.getElementById('boton1');
         const boton2 = document.getElementById('boton2');
         const boton3 = document.getElementById('boton3');
         const prueba1=document.querySelector('.prueba1')
         const prueba2=document.querySelector('.prueba2')
         const prueba3=document.querySelector('.prueba3')
         ReactDOM.render( <AllPokemon mostrarTodos={ images } />,prueba3)
        if(boton3.style.display = 'block'){
        boton1.style.display = 'block';
        boton3.style.display = 'block';
        boton2.style.display = 'block'; 
        prueba1.style.display= 'none';
        prueba2.style.display='none';
        prueba3.style.display= 'block';
     }
 
}
     

    return (

        <div>
        { 
            //operador ternario, si el loading es true muestra 'Cargando' sino 'Data Cargada'
            //loading ? 'Cargando...' : 'Data cargada'

            //usamos &&(ampersand) and
            loading && <p className="animate__animated animate__flash">Cargando la BD de Pokemón ...</p>
            //se utiliza flash para darle una animación de parpadeo
            
            
            }

        <div className="principal ">
            <div clasName="contenedor ">
                <div className="listas ">
              
                    <div className="cambio">
                    <button 
        id="boton1"
        className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={seleccionarPokemon}>Buscar por número o Pokemón</button>
                    </div>
                    <div className="cambio">
                    <button 
        id="boton2"
        className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={mostrarTipos}>Buscar por tipo</button>
                    </div>
                    <div className="cambio">
                    <button 
       id="boton3"
       className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       onClick={ocultarPokemon}>Mostrar todos</button>
                    </div>
                    
                </div>
            </div>
       

        </div>
        
        <div className='prueba2'></div>
        <div className='prueba1'></div>
        <div className='prueba3'></div>
      
        
        </div>
    )
}
