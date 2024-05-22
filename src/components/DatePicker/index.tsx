import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseDate } from "store/slices/currentDateSlice";
import {
  DropdownWrapper,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
} from "./DatePicker.styled";
import { currentDateSelector } from "store/slices/selectors";

interface Props {
  dates: string[];
}

const DatePicker = ({ dates }: Props) => {
  const reversedDates = dates.slice(0).reverse();
  const dispatch = useDispatch();
  const currentDate = useSelector(currentDateSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedDate(currentDate);
  }, [currentDate]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
    dispatch(chooseDate(date));
    setIsOpen(false);
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={handleToggle}>{selectedDate}</DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {reversedDates.map((date) => (
            <DropdownMenuItem key={date} onClick={() => handleDateChange(date)}>
              {date}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default DatePicker;
