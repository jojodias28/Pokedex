import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext ";
import { BASE_URL } from "../contants/Url";
import useRequestData from "../Hooks/UseRequestData";
import axios from "axios";

const GlobalState = (props) => {
  const [numberPage, setNumberPage] = useState(1);
  const page = numberPage * 20;
  const [pokemonsUrls, setPokemonsUrls] = useState([]);
  const [pokemonsDetail, setPokemonsDetail] = useState([]);
  const [ pokedex, setPokedex ] = useState([]);
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




  const addToPokedex = (pokemonId) => {
    const pok = pokemonsDetail.filter((p) => {
      return p.id === pokemonId;
    });
    const novoPoke = pok[0];

    const novoPokeIndex = pokedex.findIndex((p) => {
     return p.id === pokemonId;
    }) 
    if (novoPokeIndex === -1){
      const novoPokeAdicionado = [
        ...pokedex,
        novoPoke,
      ];
      setPokedex( novoPokeAdicionado );
    } else { 
        const copiaPokedex = [...pokedex]
        copiaPokedex[novoPokeIndex].quantidade++
        setPokedex( copiaPokedex );
    }
      alert("Pokemon adicionado com sucesso!")

  };





  // const addToPokedex = (poke) => {
  //   const pokeIndex = pokemonsDetail.findIndex(
  //   (item) => item.name === poke.name
  //   );

  //   const newPokemonsList = [...pokemonsDetail];
  //   newPokemonsList.splice(pokeIndex, 1);
  //   const newPokedexList = [...pokedex, poke];
  //   setPokedex(newPokedexList)
  //   alert("Pokemon adicionado com sucesso!")
  //   }




  const onChangePage = (event, value) => {
    setNumberPage(value);
  };

  const teste = {
    listPokemonData,
    setListPokemonData,
    pokemonsUrls,
    setPokemonsUrls,
    pokemonsDetail,
    setPokemonsDetail,
    onChangePage,
    pokedex,
    setPokedex,
    addToPokedex,
  };

  return (
    <GlobalStateContext.Provider value={teste}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
