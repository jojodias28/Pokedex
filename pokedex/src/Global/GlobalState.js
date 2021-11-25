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
  const [listPokemonData] = useRequestData(
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

  const onChangePage = (event, value) => {
    setNumberPage(value);
  };

  const teste = {
    listPokemonData,
    pokemonsUrls,
    setPokemonsUrls,
    pokemonsDetail,
    setPokemonsDetail,
    onChangePage,
  };

  return (
    <GlobalStateContext.Provider value={teste}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
