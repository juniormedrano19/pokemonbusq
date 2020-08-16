import React ,{ useState} from 'react'
import PropTypes from 'prop-types'
import { AddPokemon } from './components/AddPokemon'
import { PokemonGrid } from './components/PokemonGrid'


const PokemonExpert = () => {

    const [pokemon, setPokemon]=useState([])

    return (


        <>
        <h2>PokeBúsqueda</h2>
        <AddPokemon setPokemon={ setPokemon } />
        <hr />

        <ol>
            {
                pokemon.map((pokemon)=>(
                   <PokemonGrid 
                   key={ pokemon }
                   pokemon= { pokemon }

                   />
                ))
            }
        </ol>
            
        </>

    )
}

PokemonExpert.propTypes = {

}

export default PokemonExpert
