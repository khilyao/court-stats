import HeroHeading from "components/HeroHeading";
import { Goals } from "./HomePage.styled";
import Accordeon from "components/Accordeon";
import db from "tempDB.json";
var romanize = require("romanize");

const HomePage = () => {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <HeroHeading direction="План">
        План роботи секретаріату Касаційного цивільного суду на 2024 рік
      </HeroHeading>
      <Goals>Стратегічні цілі</Goals>
      {db.directions.map(({ name, sections, direction }, index) => (
        <Accordeon key={index} direction={direction} sections={sections}>
          {`${romanize(index + 1)} ${name}`}
        </Accordeon>
      ))}
    </div>
  );
};

export default HomePage;
