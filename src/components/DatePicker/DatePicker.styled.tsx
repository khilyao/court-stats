import styled from "styled-components";
import calendarIcon from "assets/calendar-icon.png";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  appearance: none;
  padding: 10px;
  padding-left: 40px;

  font-size: 16px;

  color: #002949;
  background-color: #f0f8ff;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  background-image: url(${calendarIcon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 10px center;

  transition: border-color 0.3s ease;

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    border-color: #007bff;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  min-width: 160px;
  padding: 8px 0;
  margin: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  list-style-type: none;
`;

export const DropdownMenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
