import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import GlobalStateContext from '../../Global/GlobalStateContext ';


const Pokedex = () => {

    const { pokedex } = useContext(GlobalStateContext)
    console.log("POKEDEX", pokedex)



    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    };

    return (
        <div>
            <h1> Pokedex </h1>
            {pokedex?.map((poke) => {
                return <div>
                    <p key={poke.id}> {poke.name} </p>
                    <img
                        src={poke.sprites.other.dream_world.front_default}
                        alt={poke.name}
                    />
                </div>
            })}
            <button onClick={goToHome}> Go back</button>

        </div>
    )
}

export default Pokedex