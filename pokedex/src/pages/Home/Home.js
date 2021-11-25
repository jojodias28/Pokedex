import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext ";

const Home = () => {
  const { pokemonsDetail, onChangePage } = useContext(GlobalStateContext);

  const history = useHistory();

  const goToPokedex = () => {
    history.push("/pokedex");
  };

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
          </div>
        );
      })}

      <button onClick={goToPokedex}> Ir para Pokedex </button>
      <div>
        <Pagination count={20} color="primary" onChange={onChangePage} />
      </div>
    </div>
  );
};

export default Home;
