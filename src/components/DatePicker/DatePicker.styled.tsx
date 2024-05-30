import styled from "styled-components";
import { Slider } from "@mui/material";

export const SliderContainer = styled.div`
  padding: 20px;

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
    /* background-color: #9c27b0; */
    border: none;
  }

  .MuiSlider-rail {
    opacity: 1;
    /* color: #9c27b0; */
  }
`;
