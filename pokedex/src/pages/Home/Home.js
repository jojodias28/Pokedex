import React from 'react'
import { BASE_URL } from '../../contants/Url';
import useRequestData from '../../Hooks/UseRequestData';
import Pagination from '@mui/material/Pagination'
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const Home = () => {

    // const offset = (numeropagina - 1) * 20

    const [listPokemonData] = useRequestData(`${BASE_URL}/pokemon/`)
    const [numeroPagina, setNumeroPagina] = useState(1)

    const onChangePagina = (event, value) => {
        setNumeroPagina(value)
    }


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
                        <p key={poke.id}> {poke.name} </p>
                        {/* {poke.sprites.front_default} */}
                    </div>
                )
            })}

            <button onClick={goToPokedex}> Ir para Pokedex </button>
            <div>
                <Pagination count={10} color='primary' onChange={onChangePagina} />
            </div>

        </div>
    )
}

export default Home