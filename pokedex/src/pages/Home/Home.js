import React from 'react'
import { BASE_URL } from '../../contants/Url';
import useRequestData from '../../Hooks/UseRequestData';




import { useHistory } from "react-router-dom";

const Home = () => {

    const [listPokemonData] = useRequestData(`${BASE_URL}/pokemon/`)


    const history = useHistory();

    const goToPokedex = () => {
        history.push("/pokedex");
    };


    return (
        <div>
            <h1> Home </h1>
            {listPokemonData?.results.map((poke) => {
                return (
                    <div>
                        <p key={poke.id}> {poke.name}</p>
                    </div>
                )
            })}

            <button onClick={goToPokedex}> Ir para Pokedex </button>

        </div>
    )
}

export default Home