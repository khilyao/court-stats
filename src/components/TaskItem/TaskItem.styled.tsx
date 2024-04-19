import styled from "styled-components";

export const Remark = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Signature = styled.span`
  display: inline-block;

  margin-top: 4px;

  font-size: 12px;
  font-weight: 500;

  color: #343434;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
