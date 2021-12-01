import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../Routes/Coordinate";
import GlobalStateContext from "../../Global/GlobalStateContext ";
import { goToDetails } from "../../Routes/Coordinate";

const Pokedex = () => {
  const { pokedex, removePokemonCart } = useContext(GlobalStateContext);

  const history = useHistory();

  return (
    <div>
      <h1> Pokedex </h1>

      {pokedex?.map((poke) => {
        return (
          <div>
            <p key={poke.id}> {poke.name} </p>
            <img
              src={poke.sprites.other.dream_world.front_default}
              alt={poke.name}
            />
            <button
              onClick={() => {
                removePokemonCart(poke);
              }}
            >
              Remover
            </button>
            <button
              onClick={() => goToDetails(history, poke.name)}
              key={poke.name}
            >
              Ver Detalhes
            </button>
          </div>
        );
      })}

      <button onClick={() => goToHome(history)}> Go back</button>
    </div>
  );
};

export default Pokedex;
