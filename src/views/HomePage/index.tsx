import HeroHeading from "components/HeroHeading";
import { Goals } from "./HomePage.styled";
import Accordeon from "components/Accordeon";
import db from "tempDB.json";

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
      {db.directions.map(({ name, sections }, index) => (
        <Accordeon key={index} sections={sections}>
          {name}
        </Accordeon>
      ))}
    </div>
  );
};

export default HomePage;
