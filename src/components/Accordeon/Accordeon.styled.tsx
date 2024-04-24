import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "assets/icons/arrow.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

interface GoalFullDescProps {
  $isAccordeonOpen?: boolean;
}

export const StyledArrow = styled(Arrow)`
  width: 20px;
  height: 20px;
  padding: 5px;

  border-radius: 50%;

  transition: all 100ms linear;
  transform: scale(2);

  &:hover,
  &:focus {
    background-color: #000;
    fill: #fff;
    transform: scale(2.2);
  }
`;

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

  transition: transform 350ms linear, opacity 600ms linear;
  opacity: 0;
  transform: translateY(-20%);

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Item = styled(motion.li)`
  display: flex;
  justify-content: center;

  box-shadow: 0 0 #0000, 0 0 #0000, 0px 2px 8px 0px rgba(61, 61, 61, 0.16);

  transition: transform 100ms linear, box-shadow 100ms linear;

  &:hover,
  &:focus {
    box-shadow: 0 0 #0000, 0 0 #0000, 0px 4px 16px 0px rgba(61, 61, 61, 0.3);
  }
`;

export const GoalFullDesc = styled.div<GoalFullDescProps>`
  display: flex;

  width: 100%;
  align-items: center;
  flex-direction: column;

  /* ${({ $isAccordeonOpen }) => $isAccordeonOpen && `padding-bottom: 20px`} */
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 1.2rem 1rem 1rem;

  color: #000;
  text-decoration: none;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.2rem 1rem 1rem;
`;

export const GoalTitle = styled.h2`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
`;

export const ReadMore = styled.span`
  display: inline-block;
  max-width: 125px;

  padding: 6px 10px;

  font-weight: 500;

  background-color: #f5f2f0;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  transition: background-color 100ms ease-in, color 100ms ease-in,
    box-shadow 100ms ease-in;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #002949;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Value = styled.span`
  display: inline-block;

  margin-top: 20px;

  font-weight: 700;
  font-size: 24px;

  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.1);
`;

export const GoalDescription = styled.p`
  color: rgb(72, 72, 72);
  font-size: 14px;
  line-height: 1.5;
`;
