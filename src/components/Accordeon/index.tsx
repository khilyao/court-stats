import { useState } from "react";
import { motion } from "framer-motion";

import {
  StyledLink,
  GoalInfoBlock,
  GoalHeading,
  Preview,
  List,
  Item,
  GoalFullDesc,
  GoalTitle,
  Value,
  ReadMore,
  Body,
  StyledArrow,
} from "./Accordeon.styled";
import { Section } from "types/directionsTypes";

type Props = {
  sections?: Section[];
  children: string;
  direction: string;
};

const Accordeon = ({ sections, direction, children }: Props) => {
  const [isMoreGoodInfoClicked, setIsMoreGoodInfoClicked] = useState(false);

  // const truncateString = (str: string, maxLength: number): string => {
  //   return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
  // };

  return (
    <GoalInfoBlock>
      <GoalHeading
        onClick={() => {
          setIsMoreGoodInfoClicked(!isMoreGoodInfoClicked);
        }}
      >
        <Preview>{children}</Preview>
        <StyledArrow
          style={{
            transform: isMoreGoodInfoClicked ? "rotate(90deg) scale(2)" : "",
          }}
        />
      </GoalHeading>
      <List
        style={{
          transform: isMoreGoodInfoClicked ? "translateY(0)" : "",
          opacity: isMoreGoodInfoClicked ? "1" : "0",
          marginBottom: isMoreGoodInfoClicked ? "20px" : "",
        }}
      >
        {isMoreGoodInfoClicked && (
          <>
            {sections &&
              sections.map(
                ({ sectionName, result, subSections = false }, index) => (
                  <Item
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <GoalFullDesc>
                      {subSections ? (
                        <StyledLink to={`/goals/${direction}/${index + 1}`}>
                          <GoalTitle>{`${index + 1} ${sectionName}`}</GoalTitle>
                          <motion.button
                            style={{
                              marginTop: 20,
                              outline: "none",
                              background: "none",
                              border: "none",
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ReadMore>Детальніше</ReadMore>
                          </motion.button>
                        </StyledLink>
                      ) : (
                        <Body>
                          <GoalTitle>{`${index + 1} ${sectionName}`}</GoalTitle>
                          <Value>{result}</Value>
                        </Body>
                      )}
                    </GoalFullDesc>
                  </Item>
                )
              )}
          </>
        )}
      </List>
    </GoalInfoBlock>
  );
};

export default Accordeon;
