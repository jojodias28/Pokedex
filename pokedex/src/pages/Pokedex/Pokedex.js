import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import GlobalStateContext from '../../Global/GlobalStateContext ';


const Pokedex = () => {
    const {pokemonsDetail} = useContext(GlobalStateContext)


    

    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    };

    return (
        <div>
            <h1> Pokedex </h1>
            {pokemonsDetail?.map((poke) => {
                return <div>
                  <p key={poke.id}> {poke.name} </p>
              </div>
            }) }
            <button onClick={goToHome}> Go back</button>

        </div>
    )
}

export default Pokedex