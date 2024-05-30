import { useDispatch, useSelector } from "react-redux";
import { chooseDate } from "store/slices/currentDateSlice";
import {
  StyledSlider,
  SliderContainer,
  HighlightedMark,
} from "./DatePicker.styled";
import debounce from "debounce";
import { currentDateSelector } from "store/slices/selectors";
import { useCallback, useEffect, useState } from "react";

interface Props {
  dates: string[];
}

const DatePicker = ({ dates }: Props) => {
  const dispatch = useDispatch();
  const currentDate = useSelector(currentDateSelector);
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

  return (
    <SliderContainer>
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
