import React from "react";
import { BASE_URL } from "../../contants/Url";
import useRequestData from "../../Hooks/UseRequestData";
import Pagination from "@mui/material/Pagination";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [numberPage, setNumberPage] = useState(1);
  const page = numberPage * 20;
  const [listPokemonData, setListPokemonData] = useRequestData(
    `${BASE_URL}/pokemon?limit=20&offset=${page}`
  );
  const [pokeUrl, setPokeUrl] = useState([]);
  const [photoUrl, setPhotoUrl] = useState();

  const onChangePage = (event, value) => {
    setNumberPage(value);
  };

  const history = useHistory();

  const goToPokedex = () => {
    history.push("/pokedex");
  };

  const handleData = (res) => {
    res.data.results.map((item) => {
      setPokeUrl(pokeUrl.push(item.url));
    });
    // console.log(res.data.next)
    handlePhotos();
  };

  const handlePhotos = () => {
    pokeUrl.map((pokemon) => getPhotos(pokemon));
  };

  const getPhotos = (url) => {
    axios.get(url).then((response) =>
      setPhotoUrl(
        console.log(response.data.sprites.other.home.front_default)
        // setPhotoUrl(response.data.sprites.other.home.front_default)
      )
    );
  };

  const getData = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20%22")
      .then((response) => handleData(response));
  };

  useEffect(() => {
    getData();
  }, []);

  //   const pokeUrl = listPokemonData?.results.map((pokemons) => pokemons.url);
  //   const filtroPoke = pokeUrl?.map((p) => {
  //     return p;
  //   });

  //   const getUrls = () => {
  //     const list = [];
  //     listPokemonData.map((p) => {
  //       list.push(p.url);
  //       setListPokemonData(list);
  //     });
  //   };

  //   console.log(getUrls);

  //   return (
  //     <div>
  //       <h1> Home </h1>

  //       {/* <button onClick={goToPokedex}> Ir para Pokedex </button>
  //       <div>
  //         <Pagination count={20} color="primary" onChange={onChangePage} />
  //       </div> */}
  //     </div>
  //   );
  // };

  return (
    <div>
      {listPokemonData &&
        listPokemonData.results.map((poke) => {
          return (
            <div>
              <p key={poke.id}> {poke.name} </p>
              <img src={photoUrl} />
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
