import styled from "styled-components";
import { Slider } from "@mui/material";

export const SliderContainer = styled.div`
  background-color: #fafafa;
  padding: 20px;

  border-radius: 8px;

  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

export const StyledSlider = styled(Slider)`
  & .MuiSlider-thumb {
    width: 40px;
    height: 20px;
    background-color: #25507b;
    border-radius: 3px;
    border: 2px solid #2b2b71;
    background-image: linear-gradient(
      45deg,
      #fff 25%,
      transparent 25%,
      transparent 50%,
      #fff 50%,
      #fff 75%,
      transparent 75%,
      transparent
    );
    background-size: 10px 10px;
  }

  & .MuiSlider-thumb:hover,
  & .MuiSlider-thumb.Mui-focusVisible,
  & .MuiSlider-thumb.Mui-active {
    box-shadow: none;
  }

  .MuiSlider-track {
    border: none;
    height: 6px;
  }

  .MuiSlider-rail {
    opacity: 1;
    height: 6px;
  }

  .MuiSlider-mark {
    position: static;
  }
`;

export const HighlightedMark = styled.div<{ selected: boolean }>`
  list-style: none;
  transition: color 200ms linear, transform 100ms linear;
  font-family: "Roboto condensed";
  font-weight: 600;
  font-size: 16px;
  transform: ${(props) => (props.selected ? "scale(1.1)" : "")};
  color: ${(props) => (props.selected ? "#2f2f97" : "black")};
`;
