import React from 'react';
import { useParams } from 'react-router-dom';
import useRequestData from '../../Hooks/UseRequestData';
import  { BASE_URL } from '../../contants/Url'; 

const Details = () => {

    const params = useParams()
    const pokemon = useRequestData(
        `${BASE_URL}/pokemon/${params.name}`
    ); 

    console.log('Atenção', params)
    console.log('KOEH', pokemon)
    

    const pokeType =
    pokemon.types &&
    pokemon.types.map((type) => {
    return <p key={pokemon.id}>{type.type.name.toUpperCase()}</p>;
    });

const pokeStats =
    pokemon.stats &&
    pokemon.stats.map((stat) => {
    return <p key={pokemon.id}>{stat.base_stat}</p>;
    });

const pokeMoves =
    pokemon.moves &&
    pokemon.moves.slice(0, 3).map((move) => {
    return <p key={pokemon.id}>{move.move.name}</p>;
    });

    return (
        <div> 
            <h1> Detalhes </h1>
            <p>{pokemon.id}</p>
            {pokemon.name}
            {pokeType}
            {pokemon.height}
            {pokemon.weight}
            
        
        </div>
    )
}

export default Details