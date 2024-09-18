import { useState } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f4f4f4;
  text-align: center;
`;

const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

const Day = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  /* Highlight selected day */
  background-color: ${(props) => (props.isSelected ? '#ff8c00' : 'transparent')};
  color: ${(props) => (props.isToday ? '#d63031' : 'inherit')};
`;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarComponent = () => {
    const today = new Date();
    const [dates, setDates] = useState([]);
    const [calendar, setCalendar] = useState({
        month: today.getMonth(),
        year: today.getFullYear()
    });
    const daysArray = [];

    const getDaysOfMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    }

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handleMonthChange = (direction) => {
        let newMonth = calendar.month + direction;
        let newYear = calendar.year;

        if(newMonth < 0) {
            newMonth = 11;
            newYear -= 1;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        }

        setCalendar(prevState => ({...prevState, month: newMonth }));
        setCalendar(prevState => ({...prevState, year: newYear }));
    }

    const daysInMonth = getDaysOfMonth(calendar.year, calendar.month);
    const firstDayOfMonth = getFirstDayOfMonth(calendar.year, calendar.month);

    return (
        <div>
            <CalendarContainer>
                <CalendarHeader>
                    <button onClick={() => setCalendar(prevState => ({...prevState, month: prevState.month - 1 }))}>Prev</button>
                    <span>{new Date(calendar.year, calendar.month).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                    <button onClick={() => setCalendar(prevState => ({...prevState, month: prevState.month - 1 }))}>Next</button>
                </CalendarHeader>
                <DayGrid>
                    {daysOfWeek.map((day) => (
                        <Day key={day} style={{ fontWeight: 'bold' }}>{day}</Day>
                    ))}
                </DayGrid>
                <DayGrid>
                    {daysArray}
                </DayGrid>
            </CalendarContainer>
        </div>
    )
}

export default CalendarComponent;