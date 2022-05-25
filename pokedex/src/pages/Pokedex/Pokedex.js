import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../Routes/Coordinate";
import GlobalStateContext from "../../Global/GlobalStateContext ";
import { goToDetails } from "../../Routes/Coordinate";
import {
  PokeCard,
  PokemonImg,
  TitleCard,
  PokemonName,
  PokeButtonCard,
  PokeButtonDetails,
  PokeButtonsCard,
  PokeBody,
  PokeButton,
  PokeLogo,
  PokeHeader,
  PokeMain,
} from "./PokedexStyled";

const Pokedex = () => {
  const { pokedex, removePokemonCart } = useContext(GlobalStateContext);

  const history = useHistory();

  return (
    <PokeBody>
      <PokeHeader>
        <PokeLogo src={"/img/logo.png"} onClick={() => goToHome(history)} />

        <PokeButton onClick={() => goToHome(history)}> Go back</PokeButton>
      </PokeHeader>
      <PokeMain>
        {pokedex?.map((poke) => {
          return (
            <PokeCard>
              <TitleCard>
                <PokemonName key={poke.id}> {poke.name} </PokemonName>
              </TitleCard>
              <PokemonImg
                src={poke.sprites.other.dream_world.front_default}
                alt={poke.name}
              />
              <PokeButtonsCard>
                <PokeButtonCard
                  onClick={() => {
                    removePokemonCart(poke);
                  }}
                >
                  Remover
                </PokeButtonCard>
                <PokeButtonDetails
                  onClick={() => goToDetails(history, poke.name)}
                  key={poke.name}
                >
                  +
                </PokeButtonDetails>
              </PokeButtonsCard>
            </PokeCard>
          );
        })}
      </PokeMain>
    </PokeBody>
  );
};

export default Pokedex;
