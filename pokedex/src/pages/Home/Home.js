import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { useHistory } from "react-router-dom";
import { goToDetails, goToPokedex } from "../../Routes/Coordinate";
import GlobalStateContext from "../../Global/GlobalStateContext ";

const Home = () => {
  const { pokemonsDetail, onChangePage, addToPokedex } =
    useContext(GlobalStateContext);

  const history = useHistory();

  return (
    <div>
      {pokemonsDetail?.map((poke) => {
        return (
          <div>
            <p key={poke.id}>{poke.name}</p>
            <img
              src={poke.sprites.other.dream_world.front_default}
              alt={pokemonsDetail.name}
            />
            <button onClick={() => addToPokedex(poke)}>
              {" "}
              Adicionar à Pokedex{" "}
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

      <button onClick={() => goToPokedex(history)}> Ir para Pokedex </button>
      <div>
        <Pagination count={20} color="primary" onChange={onChangePage} />
      </div>
    </div>
  );
};

export default Home;
