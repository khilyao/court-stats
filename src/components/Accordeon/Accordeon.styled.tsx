import styled from "styled-components";

export const GoalInfoBlock = styled.div`
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 65%;
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
  font-weight: 700;
  line-height: 1.2;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  list-style: none;

  transition: transform 200ms linear, opacity 400ms linear;
  opacity: 0;
  transform: translateY(-20%);
`;

export const Item = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:last-child {
    margin-bottom: 70px;
  }
`;

export const GoalFullDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GoalTitle = styled.h2`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.2;
`;

export const GoalDescription = styled.p`
  color: rgb(72, 72, 72);
  font-size: 14px;
  line-height: 1.5;
`;
