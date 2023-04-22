import "./App.css";
import dayjs from "dayjs";
import Calendar from "./components/Calendar";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Todos from "./components/Todos";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodoLayout from "./layouts/AddTodoLayout";

function App() {
	const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState(storedTodos);
	const [editTodo, setEditTodo] = useState(null);
	const currentDate = dayjs();
	const [selectDate, setSelectDate] = useState(currentDate);
	const [category, setCategory] = useState("general");
	console.log(selectDate.format("MM. DD. YYYY"));

	const categories = [
		{ label: "General", value: "general" },
		{ label: "Personal", value: "personal" },
		{ label: "Work", value: "work" },
	];

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<BrowserRouter>
			<div className="App">
				<div className="app-wrapper">
					<Header />
					<Routes>
						<Route
							path="/calendar"
							element={
								<Calendar
									selectDate={selectDate}
									setSelectDate={setSelectDate}
									currentDate={currentDate}
								/>
							}
						/>
						<Route
							path="/todolist"
							element={
								<TodoList
									newTodo={newTodo}
									setNewTodo={setNewTodo}
									todos={todos}
									setTodos={setTodos}
									editTodo={editTodo}
									setEditTodo={setEditTodo}
									category={category}
									setCategory={setCategory}
									categories={categories}
								/>
							}
						/>
						<Route
							path="/"
							element={
								<Todos
									todos={todos}
									setTodos={setTodos}
									setEditTodo={setEditTodo}
									category={category}
								/>
							}
						/>
					</Routes>
					<Navigation />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
