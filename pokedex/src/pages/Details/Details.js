import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../Hooks/UseRequestData";
import { BASE_URL } from "../../contants/Url";
import { Modal, Button } from "react-bootstrap";
import GlobalStateContext from "../../Global/GlobalStateContext ";
import { DetailsPoke, Cards, InfoDisplay } from "./DetailsStyled";

const Details = () => {
  const params = useParams();
  const [pokemon] = useRequestData(`${BASE_URL}/pokemon/${params.name}`);
  const { show, handleClose } = useContext(GlobalStateContext);

  const pokeType =
    pokemon &&
    pokemon.types.map((type) => {
      return <p key={pokemon.id}>{type.type.name}</p>;
    });

  const pokeStats =
    pokemon &&
    pokemon.stats.map((stat) => {
      return (
        <div>
          <p key={pokemon.id}>{stat.base_stat}</p>
        </div>
      );
    });

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Details </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {pokemon && (
            <DetailsPoke>
              <Cards>
                <p>
                  <strong>Name: {""}</strong>
                  {pokemon.name.toUpperCase()}
                </p>
                <p>
                  <strong>ID:</strong> {pokemon.id}
                </p>
                <InfoDisplay>
                  <strong>Type: </strong>
                  {pokeType[0]}
                </InfoDisplay>
                <p>
                  <strong>Height: </strong>
                  {pokemon.height}
                </p>
                <p>
                  <strong>Weight: </strong>
                  {pokemon.weight}
                </p>
              </Cards>
              <Cards>
                <InfoDisplay>
                  <strong>HP:</strong> {pokeStats[0]}
                </InfoDisplay>
                <InfoDisplay>
                  <strong>Attack:</strong>
                  {pokeStats[1]}
                </InfoDisplay>
                <InfoDisplay>
                  <strong>Defense:</strong> {pokeStats[2]}
                </InfoDisplay>
                <InfoDisplay>
                  <strong>Special Attack:</strong> {pokeStats[3]}
                </InfoDisplay>
                <InfoDisplay>
                  <strong>Special Defense:</strong> {pokeStats[4]}
                </InfoDisplay>
              </Cards>
            </DetailsPoke>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Details;
