import styled from "styled-components";

export const PokeBody = styled.body`
  background-color: #f7f7f7;
  min-height: 100vh;
`;

export const PokeHeader = styled.header`
  height: 15vh;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
    height: 20vh;
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px){
    height: 20vh;
  }
`;

export const PokeLogo = styled.img`
  height: 100%;
`;

export const PokeButton = styled.button`
  background: #cf0e0e;
  border: 1px solid #f7f7f7;
  color: #f7f7f7;
  border-radius: 5px;
  width: 10%;
  height: 70%;

  :hover {
    border: 1px solid #cf0e0e;
    color: #f7f7f7;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
   width: 50% ;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px)  {
   width:40% ;
  }
`;

export const PokeButtonCard = styled.button`
  background: #cf0e0e;
  border: 1px solid #f7f7f7;
  color: white;
  font-size: 12px;
  border-radius: 5px;
  width: 40%;
  height: 60%;
  opacity: 0.8;
  transition: all 0.3s ease;

  :hover {
    opacity: 1;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
   height: 85% ;
   font-size: 10px;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
   height: 90% ;
   font-size: 10px;

`;

export const PokeButtonDetails = styled.button`
  background: none;
  border: 1px solid black;
  border-radius: 100px;
  width: 40%;
  height: 40%;

  :hover {
    border: 1px solid #eb4334;
    color: #eb4334;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
   height: 50% ;
   font-size: 10px;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    height: 50% ;
   font-size: 10px;
  }

  
`;

export const PokeButtonsCard = styled.div`
  height: 80px;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
    width: 40vw;
   
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 20vw;
   
  }

`;

export const PokeCard = styled.div`
  height: 50vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 0;

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
   width: 40vw ;
   height: 40vh;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
   width: 20vw ;
   height: 40vh;
  }
`;

export const PokemonName = styled.h4`
  color: #f1f1f1;
`;

export const PokemonImg = styled.img`
  width: 180px;
  height: 150px;
  transition: all 0.3s ease;
  z-index: 1;

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
    width: 30vw;
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
   width: 20vw ;
  }
`;

export const PokeMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr 300px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  grid-row-gap: 20px;

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PaginationDiv = styled.div`
  width: 98vw;
  height: 12vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const TitleCard = styled.div`
  background-color: #111111;
  width: 18vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 0;

  @media screen and (min-device-width: 320px) and (max-device-width: 767px) {
   width: 40vw ;
  }

  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
   width: 40vh ;
`;
