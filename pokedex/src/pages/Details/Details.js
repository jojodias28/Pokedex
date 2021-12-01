import React from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../Hooks/UseRequestData";
import { BASE_URL } from "../../contants/Url";

const Details = () => {
  const params = useParams();
  const [pokemon] = useRequestData(`${BASE_URL}/pokemon/${params.name}`);

  const pokeType =
    pokemon &&
    pokemon.types.map((type) => {
      return <p key={pokemon.id}>{type.type.name.toUpperCase()}</p>;
    });

  const pokeStats =
    pokemon &&
    pokemon.stats.map((stat) => {
      return <p key={pokemon.id}>{stat.base_stat}</p>;
    });

  const pokeMoves =
    pokemon &&
    pokemon.moves.slice(0, 3).map((move) => {
      return <p key={pokemon.id}>{move.move.name}</p>;
    });

  return (
    <div>
      <h1> Detalhes </h1>
      {pokemon && (
        <div>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          {pokeType}
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
          <h4>S T A T S</h4>
          {pokeStats}
          <h4>M O V E S</h4>
          {pokeMoves}
        </div>
      )}
    </div>
  );
};

export default Details;
