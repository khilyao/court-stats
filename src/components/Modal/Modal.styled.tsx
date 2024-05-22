import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const ModalOverlay = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;

    display: block;

    width: 100%;
    height: 100%;

    background: rgba(250, 248, 248, 0.5);
    z-index: 10;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  right: 70px;
  bottom: 70px;
  width: 220px;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 20;
`;

export const StyledImage = styled.img`
  margin-bottom: 10px;
  animation: ${pulse} 2s infinite;
`;

export const StyledMessage = styled.p`
  margin-bottom: 10px;
  font-family: "Roboto Condensed", sans-serif;
`;

export const StyledButton = styled.button`
  background-color: #002a49;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Roboto Condensed", sans-serif;
  transition: background-color 0.3s, transform 0.3s;
  z-index: 20;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #004494;
    transform: scale(1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
