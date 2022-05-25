import React, { useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { useHistory } from "react-router-dom";
import {
  PokeBody,
  PokeHeader,
  PokeLogo,
  PokeButton,
  PokeCard,
  PokemonImg,
  PokeMain,
  PokeButtonCard,
  PokeButtonsCard,
  PokeButtonDetails,
  PaginationDiv,
  PokemonName,
  TitleCard,
} from "./HomeStyled";
import { goToDetails, goToHome, goToPokedex } from "../../Routes/Coordinate";
import GlobalStateContext from "../../Global/GlobalStateContext ";

const Home = () => {
  const { pokemonsDetail, onChangePage, addToPokedex } =
    useContext(GlobalStateContext);

  const history = useHistory();

  return (
    <PokeBody>
      <PokeHeader>
        <PokeLogo src={"/img/logo.png"} onClick={() => goToHome(history)} />
        <PokeButton onClick={() => goToPokedex(history)}>
          go to Pokedex
        </PokeButton>
      </PokeHeader>

      <PokeMain>
        {pokemonsDetail?.map((poke) => {
          return (
            <PokeCard>
              <TitleCard>
                <PokemonName key={poke.id}>{poke.name}</PokemonName>
              </TitleCard>

              <PokemonImg
                src={poke.sprites.other.dream_world.front_default}
                alt={pokemonsDetail.name}
              />

              <PokeButtonsCard>
                <PokeButtonCard onClick={() => addToPokedex(poke)}>
                  Add to Pokedex
                </PokeButtonCard>
                <PokeButtonDetails
                  onClick={() => goToDetails(history, poke.name)}
                  key={poke.name}
                >
                  Details
                </PokeButtonDetails>
              </PokeButtonsCard>
            </PokeCard>
          );
        })}
      </PokeMain>

      <PaginationDiv>
        <Pagination count={20} color="primary" onChange={onChangePage} />
      </PaginationDiv>
    </PokeBody>
  );
};

export default Home;
