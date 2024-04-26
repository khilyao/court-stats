import { HTMLAttributes } from "react";
import styled from "styled-components";
import { motion, MotionProps } from "framer-motion";
import { ReactComponent as ArrLeft } from "assets/icons/arr-l-bold.svg";
import { ReactComponent as ArrRight } from "assets/icons/arr-r-bold.svg";

type TipWrapperProps = {
  direction: "left" | "right";
} & HTMLAttributes<HTMLDivElement> &
  MotionProps;

export const TipWrapper = styled(motion.div)<TipWrapperProps>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left: 0;" : "right: 0;")}

  display: inline-flex;
  flex-direction: column;
  align-items: center;

  width: 130px;

  padding: 10px;

  font-weight: 500;

  color: #000;
  background-color: #f8f8f8;
  border-radius: 8px;

  transition: all 150ms linear;

  box-shadow: 0 0 #f8f8f8, 0 0 #f8f8f8, 0px 2px 6px 2px rgba(61, 61, 61, 0.15);
  cursor: pointer;

  &:hover {
    color: #fff;
    transform: scale(1.1);
    background-color: #002a49;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Placeholder = styled.span`
  margin-top: 5px;

  text-align: center;
`;

export const ArrowLeft = styled(ArrLeft)`
  ${TipWrapper}:hover & {
    fill: #fff;
  }
`;

export const ArrowRight = styled(ArrRight)`
  ${TipWrapper}:hover & {
    fill: #fff;
  }
`;
