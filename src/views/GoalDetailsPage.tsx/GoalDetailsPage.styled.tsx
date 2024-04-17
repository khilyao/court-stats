import styled from "styled-components";
import { ReactComponent as Home } from "assets/icons/home.svg";

export const Details = styled.section`
  padding: 50px;
`;

export const Head = styled.div`
  display: flex;

  margin-bottom: 50px;
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
  background-color: transparent;
  border: none;

  margin-right: 30px;

  cursor: pointer;
`;

export const StyledChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartWrapper = styled.div`
  width: 400px;
  height: 400px;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;
