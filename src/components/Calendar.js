import { ClassNames, generateDate, months } from "./GenerateDate";
import {
	IoArrowForwardCircleOutline,
	IoArrowBackCircleOutline,
} from "react-icons/io5";
import './Calendar.css';
import dayjs from "dayjs";
import { useState } from "react";

function Calendar({selectDate, setSelectDate, currentDate}) {
    
  const days = ["M", "T", "W", "T", "F", "Sa", "Su"];
  //const currentDate = dayjs();
  const [today, setToday] = useState(currentDate)
  const [thisDate, setThisDate] = useState(dayjs()) //this is needed just for showing today's date, always unchanged, on the top of the calendar
  //const [selectDate, setSelectDate] = useState(currentDate)
 
    return (
			<div className="calendar-wrapper">
				<div
					className="today-div"
					onClick={() => {
						setToday(currentDate);
						setSelectDate(currentDate)
					}}>
					Today: {thisDate.format('MM. DD. YYYY')}
				</div>
				<div className="change-month">
					<IoArrowBackCircleOutline
						className="toggle-month"
						onClick={() => {
							setToday(today.month(today.month() - 1));
						}}
					/>
					{months[today.month()]}, {today.year()}
					<IoArrowForwardCircleOutline
						className="toggle-month"
						onClick={() => {
							setToday(today.month(today.month() + 1));
						}}
					/>
				</div>
				<div className="calendar-grid">
					{days.map((day, index) => {
						return (
							<h1 className="calendar-heading" key={index}>
								{day}
							</h1>
						);
					})}
				</div>
				<div className="calendar-grid">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div key={index} className="calendar-days">
									<p
										className={ClassNames(
											currentMonth ? "currentMonth" : "notCurrentMonth",
											today ? "today" : "",
											"allDays",
											selectDate.toDate().toDateString() === date.toDate().toDateString() ? 'selected' : ""
										)}
										onClick={()=> {
											setSelectDate(date)
										}}>
										{date.date()}
									</p>
								</div>
							);
						}
					)}
				</div>
			</div>
		);
}

export default Calendar;