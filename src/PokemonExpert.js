import React ,{ useState} from 'react'
import PropTypes from 'prop-types'
import { AddPokemon } from './components/AddPokemon'
import { PokemonGrid } from './components/PokemonGrid'


const PokemonExpert = ({prueba}) => {

    const [pokemon, setPokemon]=useState([])

    return (


        <>
        <h2 className="subti">PokeBúsqueda</h2>
        <AddPokemon setPokemon={ setPokemon } />
        <hr />
        <div className='mundial'>
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
        </div>
        </>

    )
}

PokemonExpert.propTypes = {

}

export default PokemonExpert
