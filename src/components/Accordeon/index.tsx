import { useState } from "react";
import { Link } from "react-router-dom";
import {
  GoalInfoBlock,
  GoalHeading,
  Preview,
  List,
  Item,
  GoalFullDesc,
  GoalTitle,
} from "./Accordeon.styled";
import { Section } from "types/sections";
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
              sections.map(({ sectionName, subSections = false }, index) => (
                <Item key={index}>
                  <GoalFullDesc>
                    {subSections ? (
                      <Link to={`/goals/${direction}/${index + 1}`}>
                        <GoalTitle>{`${index + 1} ${sectionName}`}</GoalTitle>
                      </Link>
                    ) : (
                      <GoalTitle>{`${index + 1} ${sectionName}`}</GoalTitle>
                    )}
                    {/* <GoalDescription >{desc}</GoalDescription> */}
                  </GoalFullDesc>
                </Item>
              ))}
          </>
        )}
      </List>
    </GoalInfoBlock>
  );
};

export default Accordeon;
