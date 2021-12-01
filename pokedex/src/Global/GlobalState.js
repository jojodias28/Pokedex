import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../contants/Url";
import useRequestData from "../Hooks/UseRequestData";
import GlobalStateContext from "./GlobalStateContext ";

const GlobalState = (props) => {
  const [numberPage, setNumberPage] = useState(1);
  const page = numberPage * 20;
  const [pokemonsUrls, setPokemonsUrls] = useState([]);
  const [pokemonsDetail, setPokemonsDetail] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [listPokemonData, setListPokemonData] = useRequestData(
    `${BASE_URL}/pokemon?limit=20&offset=${page}`
  );

  useEffect(() => {
    const list = [];
    listPokemonData &&
      listPokemonData.results.map((item) => {
        list.push(item.url);
        setPokemonsUrls(list);
      });
  }, [listPokemonData]);

  useEffect(() => {
    const dataPokemon = [];
    pokemonsUrls &&
      pokemonsUrls.map((item) => {
        axios
          .get(item)
          .then((response) => {
            dataPokemon.push(response.data);
            if (dataPokemon.length === 20) {
              setPokemonsDetail(dataPokemon);
            }
          })
          .catch((error) => {
            alert(error);
          });
      });
  }, [pokemonsUrls]);

  const addToPokedex = (poke) => {
    const pokeIndex = pokemonsDetail.findIndex(
      (item) => item.name === poke.name
    );

    const newPokemonsList = [...pokemonsDetail];
    newPokemonsList.splice(pokeIndex, 1);
    const newPokedexList = [...pokedex, pokemonsDetail[pokeIndex]];

    setPokemonsDetail(newPokemonsList);

    setPokedex(newPokedexList);

    alert("Pokemon adicionado com sucesso!");
  };

  const removePokemonCart = (poke) => {
    const pokeIndex = pokedex.findIndex((item) => item.name === poke.name);

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const newPokemonList = [...pokemonsDetail, pokedex[pokeIndex]];

    setPokemonsDetail(newPokemonList);
    setPokedex(newPokedexList);

    alert("Pokemon removido!");
  };

  const onChangePage = (event, value) => {
    setNumberPage(value);
  };

  const teste = {
    pokemonsDetail,
    onChangePage,
    pokedex,
    addToPokedex,
    removePokemonCart,
  };

  return (
    <GlobalStateContext.Provider value={teste}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
