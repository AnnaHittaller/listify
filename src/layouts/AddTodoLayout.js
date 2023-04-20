import { Outlet } from "react-router-dom";
import Calendar from "../components/Calendar";
import dayjs from "dayjs";
import { useState } from "react";

export default function AddTodoLayout() {
	const currentDate = dayjs();
	const [selectDate, setSelectDate] = useState(currentDate);

	console.log(selectDate.format("MM. DD. YYYY"), "This is it");

	return (
		<>
			<Outlet />
			{/* <Calendar
				selectDate={selectDate}
				setSelectDate={setSelectDate}
				currentDate={currentDate}
			/> */}
		</>
	);
}
