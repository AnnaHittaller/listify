
import './App.css';
import AddTodo from './components/AddTodo';
import Calendar from './components/Calendar';

import { useState, useEffect } from "react";
import TodoList from './components/TodoList';
import Todos from './components/Todos';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation'


//import "./components/Calendar.css";

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("todos"));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);


  return (
		<div className="App">
      <Header />
			<Calendar />
			<TodoList todos={todos} setTodos={setTodos} />
			<Todos todos={todos} setTodos={setTodos} />
      <Navigation />
		</div>
	);

}

export default App;
