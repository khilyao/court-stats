import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoalInfoBlock = styled.div`
  width: 100%;
  font-family: "Helvetica Neue", sans-serif;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export const GoalHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 35px;
  padding-bottom: 35px;

  border-top: 1px solid #dfdfdf;
  cursor: pointer;
`;

export const Preview = styled.span`
  font-family: "Helvetica Neue", sans-serif;
  letter-spacing: 0;
  font-weight: 700;
  line-height: 1.2;
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 25px;

  list-style: none;

  transition: transform 200ms linear, opacity 400ms linear;
  opacity: 0;
  transform: translateY(-20%);

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;

  box-shadow: 0 0 #0000, 0 0 #0000, 0px 2px 8px 0px rgba(61, 61, 61, 0.16);
`;

export const GoalFullDesc = styled.div`
  display: flex;

  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;

  padding: 1.5rem 1rem 1rem;

  color: #000;
  text-decoration: none;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.5rem 1rem 1rem;
`;

export const GoalTitle = styled.h2`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
`;

export const Value = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 24px;
`;

export const GoalDescription = styled.p`
  color: rgb(72, 72, 72);
  font-size: 14px;
  line-height: 1.5;
`;
