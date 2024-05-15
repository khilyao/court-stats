import HeroHeading from "components/HeroHeading";
import { Goals, LoaderWrapper } from "./HomePage.styled";
import Accordeon from "components/Accordeon";
import DatePicker from "components/DatePicker";
import { recordsSelector } from "store/slices/selectors";
import { useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";

var romanize = require("romanize");

const HomePage = () => {
  const records = useSelector(recordsSelector);
  const dates = records.map(({ date }) => date);

  if (!records || records.length === 0) {
    return (
      <LoaderWrapper>
        <SyncLoader size={50} color="#002a49" />
      </LoaderWrapper>
    );
  }

  const directions = records[0].directions;

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <HeroHeading direction="План">
        План роботи секретаріату Касаційного цивільного суду на 2024 рік
      </HeroHeading>
      <div style={{ margin: "20px 0 10px" }}>
        <DatePicker dates={dates} />
      </div>
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
