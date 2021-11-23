import React from 'react'
import { BASE_URL } from '../../contants/Url';
import useRequestData from '../../Hooks/UseRequestData';
import Pagination from '@mui/material/Pagination'
import { useHistory } from "react-router-dom";
import { useState } from 'react';



const Home = () => {

    const [numberPage, setNumberPage] = useState(1)
    const page = numberPage * 20
    const [listPokemonData] = useRequestData(`${BASE_URL}/pokemon?limit=20&offset=${page}`)


    const onChangePage = (event, value) => {
        setNumberPage(value)
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

                        {/* <img src={poke.sprites.front_default} />  */}

                    </div>
                )
            })}

            <button onClick={goToPokedex}> Ir para Pokedex </button>
            <div>
                <Pagination count={20} color='primary' onChange={onChangePage} />
            </div>

        </div>
    )
}

export default Home