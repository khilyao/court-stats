import { useDispatch, useSelector } from "react-redux";
import { chooseDate } from "store/slices/currentDateSlice";
import {
  StyledSlider,
  SliderContainer,
  HighlightedMark,
  Select,
} from "./DatePicker.styled";
import debounce from "debounce";
import {
  currentDateSelector,
  currentYearSelector,
} from "store/slices/selectors";
import { useCallback, useEffect, useState } from "react";
import { chooseYear } from "store/slices/currentYearSlice";

interface Props {
  years: (string | number)[];
  dates: string[];
}

const DatePicker = ({ dates, years }: Props) => {
  const dispatch = useDispatch();
  const currentDate = useSelector(currentDateSelector);
  const currentYear = useSelector(currentYearSelector);
  const [sliderValue, setSliderValue] = useState(
    dates.indexOf(currentDate) + 1
  );
  const getValueLabel = (value: number) => {
    return dates[Math.round(value) - 1];
  };

  const debouncedDispatch = useCallback(
    debounce((value: number) => {
      dispatch(chooseDate(dates[value]));
    }, 15),
    [dispatch, dates]
  );

  useEffect(() => {
    setSliderValue(dates.indexOf(currentDate) + 1);
  }, []);

  const marks = dates.map((date, index) => ({
    value: index + 1,
    label: (
      <HighlightedMark selected={date === currentDate}>{date}</HighlightedMark>
    ),
  }));

  const handleSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(chooseYear(Number(e.target.value)));
  };

  return (
    <SliderContainer>
      <Select name="year" onChange={handleSelectYear} value={currentYear}>
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <StyledSlider
        aria-label="Date picker"
        value={sliderValue}
        color={"primary"}
        valueLabelDisplay="auto"
        valueLabelFormat={getValueLabel}
        step={0.001}
        onChange={(_, value) => {
          const number = Math.round(Number(value) - 1);
          debouncedDispatch(number);
          setSliderValue(value as number);
        }}
        min={1}
        marks={marks}
        max={dates.length}
      />
    </SliderContainer>
  );
};

export default DatePicker;
