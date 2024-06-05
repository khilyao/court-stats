import HeroHeading from "components/HeroHeading";
import { Goals, LoaderWrapper } from "./HomePage.styled";
import Accordeon from "components/Accordeon";
import DatePicker from "components/DatePicker";
import {
  currentDateSelector,
  recordsSelector,
  currentYearSelector,
} from "store/slices/selectors";
import { useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";

var romanize = require("romanize");

const HomePage = () => {
  const records = useSelector(recordsSelector);
  const currentDate = useSelector(currentDateSelector);
  const currentYear = useSelector(currentYearSelector);
  const years = records.map(({ year }) => year);
  const months = records.find(({ year }) => year === currentYear)?.months;
  const dates = months?.map(({ date }) => date) || [];
  const directions = months?.find(
    ({ date }) => date === currentDate
  )?.directions;
  if (!records || records.length === 0) {
    return (
      <LoaderWrapper>
        <SyncLoader size={50} color="#002a49" />
      </LoaderWrapper>
    );
  }
  const mainTitle = `План роботи секретаріату Касаційного цивільного суду на ${currentYear} рік`;

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <HeroHeading direction="План">{mainTitle}</HeroHeading>
      <div style={{ margin: "20px 0 10px" }}>
        <DatePicker years={years} dates={dates} />
      </div>

      <Goals>Стратегічні цілі</Goals>
      {directions?.map(({ name, sections, direction }, index) => (
        <Accordeon key={index} direction={direction} sections={sections}>
          {`${romanize(index + 1)} ${name}`}
        </Accordeon>
      ))}
    </div>
  );
};

export default HomePage;
