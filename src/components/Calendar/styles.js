import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f4f4f4;
  text-align: center;
`;

export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

export const Day = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  /* Highlight selected day */
  background-color: ${(props) => (props.isSelected ? '#ff8c00' : 'transparent')};
  color: ${(props) => (props.isToday ? '#d63031' : 'inherit')};
`;