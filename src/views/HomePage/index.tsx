import HeroHeading from "components/HeroHeading";
import { Goals } from "./HomePage.styled";
import Accordeon from "components/Accordeon";
import { directionsSelector } from "store/directions/directionSelectors";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
var romanize = require("romanize");

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#42b881",
        "#faca47",
        "#ff7372",
        "#b642f4",
        "#478bf9",
        "#ff9e00",
      ],
      borderColor: [
        "#42b881",
        "#faca47",
        "#ff7372",
        "#b642f4",
        "#478bf9",
        "#ff9e00",
      ],
      borderWidth: 1,
    },
  ],
};
ChartJS.register(ArcElement, Tooltip, Legend);

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
