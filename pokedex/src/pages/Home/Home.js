import React, { useContext, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext ";

const Home = () => {
  const { pokemonsDetail, onChangePage, addToPokedex } = useContext(GlobalStateContext);
  const history = useHistory();

  const goToPokedex = () => {
    history.push("/pokedex");
  };

  // const addPokedex = (newPokemon) => {
  //   const index = pokemonsDetail.findIndex((i) =>  i.id === newPokemon.id);
  //   let newPokeDex = [...pokemonsDetail];
  //   if (index === -1) {
  //     newPokeDex.push({ ...newPokemon, ammount: 1 });
  //   } else {
  //     newPokeDex[index].amount += 1;
  //   }
  //   setPokemonsDetail(newPokeDex)
  //   alert(`O pokemon foi adicionado a sua PokeDex!`)
  //   console.log("Atenção")
  // }

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
            <button onClick={addToPokedex}> Adicionar à Pokedex </button>
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
