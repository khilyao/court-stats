import { useState } from "react";

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
  Body,
} from "./Accordeon.styled";
import { Section } from "types/directionsTypes";
import { ReactComponent as Arrow } from "assets/icons/arrow.svg";

type Props = {
  sections?: Section[];
  children: string;
  direction: string;
};

const Accordeon = ({ sections, direction, children }: Props) => {
  const [isMoreGoodInfoClicked, setIsMoreGoodInfoClicked] = useState(false);

  return (
    <GoalInfoBlock>
      <GoalHeading
        onClick={() => {
          setIsMoreGoodInfoClicked(!isMoreGoodInfoClicked);
        }}
      >
        <Preview>{children}</Preview>
        <Arrow
          style={{
            transform: isMoreGoodInfoClicked ? "rotate(90deg) " : "",
          }}
        />
      </GoalHeading>
      <List
        style={{
          transform: isMoreGoodInfoClicked ? "translateY(0)" : "",
          opacity: isMoreGoodInfoClicked ? "1" : "0",
        }}
      >
        {isMoreGoodInfoClicked && (
          <>
            {sections &&
              sections.map(
                ({ sectionName, result, subSections = false }, index) => (
                  <Item key={index}>
                    <GoalFullDesc>
                      {subSections ? (
                        <StyledLink to={`/goals/${direction}/${index + 1}`}>
                          <GoalTitle>{`${index + 1} ${sectionName}`}</GoalTitle>
                        </StyledLink>
                      ) : (
                        <Body>
                          <GoalTitle>{`${index + 1} ${sectionName}`}</GoalTitle>
                          <Value style={{ marginTop: "10px" }}>{result}</Value>
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
