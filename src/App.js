import "./App.css";
import Calendar from "./components/Calendar";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Todos from "./components/Todos";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState(storedTodos);
	const [editTodo, setEditTodo] = useState(null);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);


	return (
		<BrowserRouter>
			<div className="App">
				<div className="app-wrapper">
					<Header />
					<Routes>
						<Route path='/calendar' element={<Calendar />} />
						<Route path='/todolist' element={
							<TodoList
								newTodo={newTodo}
								setNewTodo={setNewTodo}
								todos={todos}
								setTodos={setTodos}
								editTodo={editTodo}
								setEditTodo={setEditTodo}
							/>
						}/>
						<Route path='/todos' element={
							<Todos
								todos={todos}
								setTodos={setTodos}
								setEditTodo={setEditTodo}
							/>
						}/>
					</Routes>
					<Navigation />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
