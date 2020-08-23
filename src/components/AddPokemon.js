import React, { useState } from 'react'

export const AddPokemon = ({setPokemon}) => {

    const [inputValue, setInputValue]=useState('');

//destructuring al evento 
const handleInputChange=({target})=>{
    const {value}=target

    setInputValue(value);

}

const handleSubmit=(e)=>{
e.preventDefault();

if(inputValue.trim().length > 0){
   // setPokemon(valor=>[inputValue,...valor]);
   setPokemon([inputValue]);
}

setInputValue('');



}



    return (
        <form onSubmit={ handleSubmit }>

        <input 
        type="text"
        placeholder="Ingrese el número o el nombre de un pokemón"
        value={ inputValue }
        onChange={ handleInputChange }
        />
            
        </form>
    )
}
