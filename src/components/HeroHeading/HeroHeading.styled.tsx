import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0px 2px 8px 0px rgba(61, 61, 61, 0.16);
`;

export const Direction = styled.span`
  font-size: 10px;
  font-weight: 600;

  text-transform: uppercase;

  color: #a4b1c8;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.7;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
