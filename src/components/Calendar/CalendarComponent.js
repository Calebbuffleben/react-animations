import { useState } from "react";
import { 
    CalendarContainer, 
    CalendarHeader,
    DayGrid,
    Day 
} from './styles';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarComponent = () => {
    const today = new Date();
    const [dates, setDates] = useState([]);
    const [calendar, setCalendar] = useState({
        month: today.getMonth(),
        year: today.getFullYear()
    });
    const [selectedDate, setSelectedDate] = useState(today.getDate());
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

    // Fill in empty days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push(<Day key={`empty-${i}`} />);
    }

    //Add days of the month
    for( let day = 1; day <= daysInMonth; day++) {
        const isToday = day === today.getDate() && calendar.month === today.getMonth() && calendar.year === today.getFullYear();
        const isSelected = day === selectedDate;

        daysArray.push(
            <Day
                key={day}
                isToday={isToday}
                isSelected={isSelected}
                onClick={() => setSelectedDate(day)}
            >
            {day}
            </Day>
        )
    }
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