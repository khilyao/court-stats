import styled from "styled-components";
import { ReactComponent as Home } from "assets/icons/home.svg";

export const Details = styled.section`
  padding-top: 50px;

  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 50px;

  @media screen and (min-width: 440px) {
    flex-direction: row;
  }
`;

export const StyledHome = styled(Home)`
  width: 40px;
  height: 40px;

  fill: #5d5d5d;
  transition: transform 100ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StyledBtn = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;

  margin-bottom: 20px;

  background-color: transparent;
  border: none;

  cursor: pointer;

  @media screen and (min-width: 440px) {
    margin: auto 0;
    margin-right: 30px;
  }
`;

export const StyledChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartWrapper = styled.div`
  width: 350px;
  height: 350px;

  @media screen and (min-width: 440px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;
