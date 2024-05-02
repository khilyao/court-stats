import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseDate } from "store/slices/currentDateSlice";
import { currentDateSelector } from "store/slices/selectors";

interface Props {
  dates: string[];
}

const DatePicker = ({ dates }: Props) => {
  const reversedDates = dates.slice(0).reverse();
  const dispatch = useDispatch();
  const currentDate = useSelector(currentDateSelector);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  useEffect(() => {
    setSelectedDate(currentDate);
  }, [currentDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    dispatch(chooseDate(date));
  };

  return (
    <>
      <select
        name="selected-date"
        value={selectedDate}
        onChange={handleDateChange}
      >
        {reversedDates.map((date) => (
          <option value={date} key={date}>
            {date}
          </option>
        ))}
      </select>
    </>
  );
};

export default DatePicker;
