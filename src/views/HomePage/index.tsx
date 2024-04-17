import HeroHeading from "components/HeroHeading";
import { Goals } from "./HomePage.styled";
import Accordeon from "components/Accordeon";
import { directionsSelector } from "store/directions/directionSelectors";
import { useSelector } from "react-redux";

var romanize = require("romanize");

const HomePage = () => {
  const directions = useSelector(directionsSelector);

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
      {directions.map(({ name, sections, direction }, index) => (
        <Accordeon key={index} direction={direction} sections={sections}>
          {`${romanize(index + 1)} ${name}`}
        </Accordeon>
      ))}
    </div>
  );
};

export default HomePage;
