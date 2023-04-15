import { ClassNames, generateDate } from "./GenerateDate";
import './Calendar.css'

function Calendar() {
    console.log(generateDate());
  const days = ["M", "T", "W", "T", "F", "Sa", "Su"];
    return (
			<div className="calendar-wrapper">
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
					{generateDate().map(({ date, currentMonth, today }, index) => {
						return (
							<div key={index} className="calendar-days">
								<p
									className={ClassNames(
										currentMonth ? "currentMonth" : "notCurrentMonth",
										today ? "today" : "",
										"allDays"
									)}>
									{date.date()}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		);
}

export default Calendar;